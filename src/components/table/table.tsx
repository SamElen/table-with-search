import { useEffect, useState } from 'react';
import styles from './table.module.scss';
import TableProps from './tableProps';
import User from '../../models/user';
import { Filter } from '../../models/filter';

function Table(props: TableProps) {
  const [userList, setUserList] = useState<User[]>([]);
  const [filteredList, setFilteredList] = useState<User[]>([]);

  const { selectedFilter, search } = props;

  useEffect(() => {
      UploadUserInfo();
  }, [])

  function UploadUserInfo() {
    fetch('https://gorest.co.in/public/v2/users')
        .then(response => response.json())
        .then(data => setUserList(data),
        (error) => {})
  }

  const filterUserList = () => {
    switch (selectedFilter) {
      case Filter.even:
        return userList.filter(user => userList.indexOf(user)%2);
      case Filter.odd:
        return userList.filter(user => !(userList.indexOf(user)%2));
      case Filter.all:
        return userList;
      default:
        return userList;
    }
  }

  useEffect(() => {
    const filteredUserList = filterUserList();
    setFilteredList(search !== '' ? filteredUserList.filter(user => user.email.toLowerCase().startsWith(search.toLowerCase())) : filteredUserList);
  }, [search, selectedFilter, userList])

    return (
        <>
          <table className={styles.Table}>
            <tr>
              <th className={styles.LeftColumnHeader}>Email</th>
              <th className={styles.ColumHeader}>Id</th>
              <th className={styles.ColumHeader}>User Id</th>
              <th className={styles.ColumHeader}>Gender</th>
              <th className={styles.ColumHeader}>Status</th>
            </tr>

            {filteredList.map(user => {
              return (
              <tr key={user.id}>
                <td className={styles.LeftColumnContent}>{user.email}</td>
                <td className={styles.ColumnContent}>{ userList.indexOf(user) + 1 }</td>
                <td className={styles.ColumnContent}>{user.id}</td>
                <td className={styles.ColumnContent}>{user.gender}</td>
                <td className={styles.ColumnContent}>{user.status}</td>
              </tr>)})
            }
          </table>
        </>
    );
}

export default Table;