const Statistics = ({ good, neutral, bad }) => {
    const total = () => good + bad + neutral;
    const calcAverage = () => {
        if (total() < 1) {
            return 0;
        }
        return ((good + bad * -1) / total()).toFixed(2);
    }
    const calcPercentPositive = () => {
        if (total() < 1) {
            return 0;
        }
        return '%' + (good / total() * 100).toFixed(2);
    }

    if (total() < 1) {
        return <p>No feedback given</p>
    }
    return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Good</th>
                        <th>Neutral</th>
                        <th>Bad</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>{good}</td>
                        <td>{neutral}</td>
                        <td>{bad}</td>
                        <td>{total()}</td>
                    </tr>
                </tbody>
            </table>
            <p>average {calcAverage()}</p>
            <p>positive {calcPercentPositive()}</p>
        </>
    )
};
export default Statistics;