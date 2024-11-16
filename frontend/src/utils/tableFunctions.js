function createData(id, firstName, lastName, email, phone, company, title) {

  id=id.toString();
    return {
      id,
      firstName,
      lastName,
      email,
      phone,
      company,
      title
    };
  }

  const headCells = [
    {
      id: 'firstname',
      numeric: false,
      disablePadding: false,
      label: 'first name',
    },
    {
      id: 'lastname',
      numeric: false,
      disablePadding: false,
      label: 'last name',
    },
    {
      id: 'email',
      numeric: false,
      disablePadding: false,
      label: 'email',
    },
    {
      id: 'phone',
      numeric: false,
      disablePadding: false,
      label: 'phone',
    },
    {
      id: 'company',
      numeric: false,
      disablePadding: false,
      label: 'company',
    },
    {
      id: 'title',
      numeric: false,
      disablePadding: false,
      label: 'title',
    }
  ];
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  export {createData, headCells, getComparator, descendingComparator};