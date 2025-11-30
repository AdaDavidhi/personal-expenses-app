import { useEffect, useState} from "react";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pencil, Trash } from "lucide-react";

const statusStyles = {
  PAID: "bg-green-900 text-green-300 border border-green-700",
  AUTO_DETECTED: "bg-blue-900 text-blue-300 border border-blue-700",
  CREDITED: "bg-yellow-900 text-yellow-300 border border-yellow-700",
};

const ExpensesList = () => {

    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExpenses = async() => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8095/api/expenses/all");
                const data = await response.json();
                if(data) {
                   setExpenses(data);
                }
            } catch(error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchExpenses();
   }, [])

    if(loading) {
        return <h1>Fetching data...</h1>
    }

    if(expenses.length === 0) {
       return <h1>No data found</h1>
    }

    

  return (
    <div className="border border-gray-600 rounded-lg overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-800">
          <TableRow className="border-b border-gray-600">
            <TableHead className="border-r border-gray-600 text-gray-300!">NAME</TableHead>
            <TableHead className="border-r border-gray-600 text-gray-300!">AMOUNT</TableHead>
            <TableHead className="border-r border-gray-600 text-gray-300!">PAYMENT METHOD</TableHead>
            <TableHead className="border-r border-gray-600 text-gray-300!">STATUS</TableHead>
            <TableHead className="text-gray-300!">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
         {expenses.length > 0 &&
          expenses.map((expense) => (
            <TableRow key={expense.id} className="border border-gray-600 hover:bg-gray-700 text-gray-400">
              <TableCell className="border-r border-gray-600">{expense.category}</TableCell>
              <TableCell className="border-r border-gray-600">{expense.amount}</TableCell>
              <TableCell className="border-r border-gray-600">{expense.payment_method}</TableCell>
              <TableCell className="border-r border-gray-600">
                <span className={`px-2 py-1 rounded-4xl text-xs font-semibold ${statusStyles[expense.status]}`}>
                    {expense.status}
                </span>
              </TableCell>
              <TableCell className="flex gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link to={`/edit-expenses/${expense.id}`}>
                    <Pencil className="text-blue-500" />
                  </Link>
                </Button>
                <Button variant="destructive">
                  <Trash className="text-white" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </div>
  )
}

export default ExpensesList