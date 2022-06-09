import { render, screen } from '@testing-library/react';
import App from '../App';

describe('header tests', () => {
  it("should find the test of the header", () => {
    render(<App />);
    const headerElement = screen.getByText(/Todo list app/i);
    expect(headerElement).toBeInTheDocument();
  });
  
  it("should find the element of the header", () => {
    render(<App />);
    const headingElement = screen.getByRole("heading", { name: "Todo list app" });
    expect(headingElement).toBeInTheDocument();
  });
  
  it("should have a h1 tag as the main header element", () => {
    render(<App />);
    const headingElementType = screen.getByText(/Todo list app/i);
    expect(headingElementType).toContainHTML("h1");
  });
})
