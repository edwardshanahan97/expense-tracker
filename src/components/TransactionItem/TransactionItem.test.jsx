import { test, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastProvider } from "../../context/ToastContext";
import { FinanceProvider } from "../../context/FinanceContext";
import Toast from "../Toast/Toast";
import TransactionItem from "./TransactionItem";
import { PageProvider } from "../../context/PageContext";
import { usePage } from "../../context/PageContext";
import { useEffect } from "react";

afterEach(() => {
  cleanup();
});

const TestWrapper = () => {
  const { setCurrentPage } = usePage();

  useEffect(() => setCurrentPage("income"), []);

  return (
    <>
      <TransactionItem
        id="123"
        type="income"
        description="Salary"
        category="salary"
        amount={1000}
        date="20/09/2026"
      />
      <Toast />
    </>
  );
};

test("removes a transaction when the delete button is clicked", async () => {
  const user = userEvent.setup();

  render(
    <ToastProvider>
      <PageProvider>
        <FinanceProvider>
          <TestWrapper />
        </FinanceProvider>
      </PageProvider>
    </ToastProvider>,
  );

  const removeButton = screen.getByRole("button", {
    name: /delete transaction/i,
  });

  await user.click(removeButton);

  expect(screen.getByText(/transaction removed/i)).toBeInTheDocument();
});
