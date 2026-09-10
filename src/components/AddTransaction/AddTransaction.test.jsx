import { test, expect, afterEach, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastProvider } from "../../context/ToastContext";
import { FinanceProvider } from "../../context/FinanceContext";
import Toast from "../Toast/Toast";
import AddTransaction from "./AddTransaction";
import { PageProvider } from "../../context/PageContext";
import { usePage } from "../../context/PageContext";
import { useEffect } from "react";

afterEach(() => {
  cleanup();
});

const TestWrapper = () => {
  const { setCurrentPage } = usePage();
  const setIsActive = vi.fn();
  useEffect(() => setCurrentPage("overview"), []);

  return (
    <>
      <AddTransaction setIsActive={setIsActive} />
      <Toast />
    </>
  );
};

test("shows a toast when an income transaction is added", async () => {
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

  const description = screen.getByLabelText("Description");
  const amount = screen.getByLabelText("Amount");
  const category = screen.getByLabelText("Category");
  const date = screen.getByLabelText("Date");
  const button = screen.getByRole("button", { name: /save income/i });

  await user.type(description, "salary");
  await user.type(amount, "500");
  await user.selectOptions(category, "salary");
  await user.type(date, "2026-09-10");

  await user.click(button);

  expect(screen.getByText(/salary added/i)).toBeInTheDocument();
});

test("shows a toast when an expense transaction is added", async () => {
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

  const expensesButton = screen.getByRole("button", { name: /expenses/i });

  await user.click(expensesButton);

  const description = screen.getByLabelText("Description");
  const amount = screen.getByLabelText("Amount");
  const category = screen.getByLabelText("Category");
  const date = screen.getByLabelText("Date");
  const button = screen.getByRole("button", { name: /save expenses/i });

  await user.type(description, "rent");
  await user.type(amount, "1200");
  await user.selectOptions(category, "housing");
  await user.type(date, "2026-09-10");

  await user.click(button);

  expect(screen.getByText(/housing added/i)).toBeInTheDocument();
});
