import tableStyles from './style/user-list.module.css'

const Table = ({columns, colspan, data })  =>{
    return(
        <table className={tableStyles.table}>
            <thead>
            <tr className={tableStyles.tr}>
            {/*columns.map((x)=>{x})*/}
            {columns.map((column)=>(
                <th key={column.username} className={tableStyles.td}>{column}</th>
            ))}
            </tr>
            </thead>
        <tbody>
                <tr className={tableStyles.tr}>
                    { data.length == 0 ?<td colSpan={colspan} className={tableStyles.td}>NO DATA</td>
                    :<td colSpan={colspan} className={tableStyles.td}>데이터가 있습니다</td>}

                </tr>
        </tbody>
        </table>
    )
}
export default function UserList(){
    const columns = ['username','password','name','telephone']
    const data = [1,2,3,4,5,56,67,7,7,78,8,87,6,12,4,234,23,42]
    const count = data.length
    return(<>
       
        <h1>사용자 목록</h1>
        {count !=0 && <h3>회원수: {count} 명</h3>}
        <div className={tableStyles.td}>
        <Table columns={columns} colspan={4} data = {data} ></Table> 
        </div>
        </>)
    
}