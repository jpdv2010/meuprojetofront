import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import axios from 'axios';
import DinamicTable from '../utils/DynamicTable';

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        
        let headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get("http://localhost:8480/api/produtos",headers).then((res) => {
            console.log(res);
            setProdutos(res.data);
        });

    },[]);
    return(
        <div>
            <Col xl={12}>
            {produtos != null && produtos.length > 0?
            <DinamicTable data={produtos} title={"Produtos"} smalTitle={"products"} />
            : null}
          </Col>
        </div>
    );
}

export default Produtos;