import Layout from '../Layout'
import Header from '../../../components/shared/dashboard/Header.jsx'
import Stats from '../../../components/shared/dashboard/overview/stats/Stats.jsx'
import TransactionsList from '../../../components/shared/dashboard/overview/transactions/TransactionsList.jsx'

const OverviewPage = () => {
  return (
  <Layout>
    <div className="flex flex-col gap-6 w-full">
      <Header
        title="Dashboard" 
        subtitle="Here you can manage you finance activity.">
      </Header>

      <Stats/>

      <TransactionsList/>
    </div>
   </Layout>
  )
}

export default OverviewPage