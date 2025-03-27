import "../User-dashboard"

export default function Rightbar({query, answer}) {
    return(
        <main className="account-details">
            <p className="Query">{query}</p>
            <p className="Ans">{answer}</p>
        </main>
    )
}