// Table.js
// 920-011615

const TableRow = ({ post }) => {
    return (
        <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
        </tr>
    );
};

const Table = ({ posts }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Başlık</th>
                    <th>İçerik</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <TableRow key={post.id} post={post} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
