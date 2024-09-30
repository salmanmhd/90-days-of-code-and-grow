const intialStateAccount = {
  balance: 0,
  loan: 0,
  purpose: '',
};

export default function accountReducer(state = intialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload };
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

export function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
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
