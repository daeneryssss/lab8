import './App.css';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const expensesList = expenses.map((expense) => (
    <div key={expense.id} className="card expense-item">
      <div className="expense-date">
        <span className="expense-date__month">{expense.date.toLocaleString('en', { month: 'long' })}</span>
        <span className="expense-date__year">{expense.date.getFullYear()}</span>
        <span className="expense-date__day">{expense.date.getDate()}</span>
      </div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <p className="expense-item__price">${expense.amount}</p>
      </div>
    </div>
  ));

  return (
    <div className="App">
      <h1>My Expenses template</h1>
      <div className="card expenses">{expensesList}</div>
    </div>
  );
}

export default App;
