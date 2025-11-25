const Header = ({title, subtitle, children}) => {
  return (
    <div className="flex justify-between p-4">
        <div>
            <h1 className="text-cyan-300 text-2xl font-bold">{title}</h1>
            <p className="text-cyan-100">{subtitle}</p>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Header