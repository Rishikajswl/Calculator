import { create } from "zustand";

const loadState = () => {
  try {
    const savedState = JSON.parse(localStorage.getItem("calculatorState"));
    return savedState || { expression: "", result: "", history: [], future: [], isDarkMode: false };
  } catch {
    return { expression: "", result: "", history: [], future: [], isDarkMode: false };
  }
};

const saveStateToLocalStorage = (state) => {
  console.log("Saving to localStorage:", state);
  localStorage.setItem("calculatorState", JSON.stringify(state));
};

const useCalculatorStore = create((set) => ({
  ...loadState(),

  appendValue: (value) =>
    set((state) => {
      const newState = {
        history: [...state.history, state.expression],
        future: [],
        expression: state.expression + value,
      };
      saveStateToLocalStorage(newState);
      return newState;
    }),

    calculateResult: () =>
        set((state) => {
          try {
            let evaluatedExpression = state.expression;
      
            
            evaluatedExpression = evaluatedExpression
              .replace(/sqrt/g, "Math.sqrt")
              .replace(/log/g, "Math.log10") // Log base 10
              .replace(/ln/g, "Math.log") // Natural logarithm
              .replace(/π/g, "Math.PI")
              .replace(/x\^y/g, "**"); // Exponentiation
      
            
            evaluatedExpression = evaluatedExpression.replace(
              /(sin|cos|tan)\(([^)]+)\)/g,
              (_, func, angle) => `Math.${func}(${angle} * Math.PI / 180)`
            );
      
            
            const factorial = (n) => {
              if (n < 0) return "Error"; // Factorial for negative numbers is undefined
              let result = 1;
              for (let i = 1; i <= n; i++) result *= i;
              return result;
            };
      
            evaluatedExpression = evaluatedExpression.replace(
              /(\d+)!/g,
              (_, num) => factorial(parseInt(num))
            );
      
            
            const result = eval(evaluatedExpression);
            const newState = {
              result: result.toString(),
              expression: state.expression,
              history: [...state.history, state.expression],
              future: [],
            };
            saveStateToLocalStorage(newState);
            return newState;
          } catch (error) {
            return { result: "Error", expression: "" };
          }
        }),
      

  undo: () =>
    set((state) => {
      if (state.history.length === 0) return state;
      const prevExpression = state.history[state.history.length - 1];
      const newHistory = state.history.slice(0, -1);
      const newState = {
        expression: prevExpression,
        history: newHistory,
        future: [state.expression, ...state.future],
      };
      saveStateToLocalStorage(newState);
      return newState;
    }),

  redo: () =>
    set((state) => {
      if (state.future.length === 0) return state;
      const nextExpression = state.future[0];
      const newFuture = state.future.slice(1);
      const newState = {
        expression: nextExpression,
        history: [...state.history, state.expression],
        future: newFuture,
      };
      saveStateToLocalStorage(newState);
      return newState;
    }),

  clearExpression: () => {
    const newState = { expression: "", result: "", history: [], future: [] };
    saveStateToLocalStorage(newState);  // Save the cleared state
    set(newState);  // Update the state
  },

  toggleDarkMode: () =>
    set((state) => {
      const newState = { isDarkMode: !state.isDarkMode };
      saveStateToLocalStorage({ ...state, ...newState });
      return newState;
    }),
}));

export default useCalculatorStore;


