const intialStateAccount = {
  balance: 0,
  loan: 0,
  purpose: '',
  isLoading: false,
};

export default function accountReducer(state = intialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case 'account/convertingCurrency':
      return { ...state, isLoading: true };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };

    case 'account/requestLoan':
      if (state.loan > 0) return state;

      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
        purpose: action.loanPurpose,
      };

    case 'account/payLoan':
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        purpose: '',
      };

    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === 'INR') {
    return { type: 'account/deposit', payload: amount };
  }

  return async function (dispatch, getState) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`
    );
    const data = await res.json();
    console.log(data);
    const converted = data.rates.INR;

    dispatch({ type: 'account/deposit', payload: converted });
  };
}
export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}
export function requestLoan(loanAmount, loanPurpose) {
  return { type: 'account/requestLoan', payload: loanAmount, loanPurpose };
}
export function payLoan() {
  return { type: 'account/payLoan' };
}
