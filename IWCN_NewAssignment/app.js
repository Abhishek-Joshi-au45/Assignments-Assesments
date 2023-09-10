const { useState } = React;

function EditableTable() {
    const [data, setData] = useState([
        { id: 1, name: 'John', email: 'john@example.com' },
        { id: 2, name: 'Jane', email: 'jane@example.com' },
        { id: 3, name: 'Bob', email: 'bob@example.com' },
    ]);

    const handleEdit = (id, column, value) => {
        // Update the data when a cell is edited
        const newData = data.map(item => {
            if (item.id === id) {
                return { ...item, [column]: value };
            }
            return item;
        });
        setData(newData);
    };

    const handleSave = () => {
        // Prepare the data for API post
        console.log('Data to be posted:', data);
        // Implement your API post logic here
    };

    return (
        <div>
            <h1>Editable Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <input
                                    type="text"
                                    value={item.name}
                                    onChange={e => handleEdit(item.id, 'name', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={item.email}
                                    onChange={e => handleEdit(item.id, 'email', e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

ReactDOM.render(<EditableTable />, document.getElementById('root'));
