import React, { useState, useEffect } from 'react';
import './product.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../customHook/useAsync';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';
async function getProduct(id){
    const response = await axios.get(`${API_URL}/product/${id}`)
    return response.data;
}

const ProductPage = () => {

    const { id } = useParams();
    const [state] = useAsync(()=>getProduct(id,),[id]);
    const { loading, data:product, error} = state;
    const navigate = useNavigate();

    const productDel = ()=>{
        axios.delete(`${API_URL}/product/${id}`)
        .then(result=>{
            console.log("삭제되었습니다.");
            navigate("/");
        })
        .catch(e=>{
            console.log(e);
        })
    }
    if(loading) return <div>로딩중입니다......</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!product) return null;
    return (
        <div className='inner'>
            <div id='image-box'>
                <img src={product.imageUrl} alt='' />
            </div>
            <div id='profile-box'>
                <ul>
                    <li>
                        <div>
                            <img src='/images/icons/avatar.png' alt='' />
                            <span>{product.seller}</span>
                        </div>
                    </li>
                    <li>
                        제품명 새로운 조명
                    </li>
                    <li>
                        가격 50000원
                    </li>
                    <li>
                        등록일 2022년 6월 2일
                    </li>
                    <li>
                        상세설명
                    </li>
                    <li>
                        {product.description}
                    </li>
                </ul>
            </div>
            <div>
                <span onClick={productDel}>삭제하기</span>
            </div>
        </div>
    );
};

export default ProductPage;