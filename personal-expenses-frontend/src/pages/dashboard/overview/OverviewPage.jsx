import Layout from '../Layout'
import Header from '../../../components/shared/dashboard/Header.jsx'
import Stats from '../../../components/shared/dashboard/overview/stats/Stats.jsx'
import ExpensesList from '../../../components/shared/dashboard/overview/expenses/ExpensesList.jsx'

const OverviewPage = () => {
  return (
  <Layout>
    <div className="flex flex-col gap-6 w-full">
      <Header
        title="Dashboard" 
        subtitle="Here you can manage you finance activity.">
      </Header>

      <Stats/>

      <h2 className='text-2xl text-gray-200'>Recent Transactions</h2>
      <ExpensesList/>
    </div>
   </Layout>
  )
}

export default OverviewPage