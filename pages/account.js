import React from 'react'
import { useEffect } from 'react';
import base from '../api/base';
import { useState } from 'react';
import Navbar from '../components/Layout/Navbar';

const account = () => {
  let baseURL = 'https://api.mareew.uz/'
  const [user, setUser] = useState({ user: '' })
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [loading, setLoading] = useState(false)
  let telegramcode3 = typeof window !== "undefined" ? window.localStorage.getItem('refresh') : false;
  useEffect(() => {
    setLoading(true)
    if (telegramcode3) {
      base.get(`/me/`).then((res) => {
        if (res.status == 200) {
          setUser({
            user: res.data.user
          });
          setLoading(false)
          localStorage.setItem("test", JSON.stringify(res.data.user), { path: "/" })
        }

      }).catch((err)=>{
        setLoading(false)
      })
    }else{
      setLoading(false)
    }
  }, [])

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    base.put(`/me/`, {
      "first_name": firstname,
      "last_name": lastname
    }).then((res) => {
      if (res.status == 200) {
        setLoading(false)
        base.get(`/me/`).then((res) => {
          if (res.status == 200) {
            setUser({
              user: res.data.user
            });
            localStorage.setItem("test", JSON.stringify(res.data.user), { path: "/" })
          }

        })
      }

    }).catch((err)=>{
      setLoading(false)
    })
  }
  let users = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem('test')) : false;
  return (
    <div>
      {
        loading ?
          <div className="bg-loader">
            <span className="loader">
              <span className="loader-inner"></span>
            </span>
          </div>
          :
          <>
          <Navbar user={users ? users : ''}/>
            <div className="container">
              <div className="row">
                <div className="col-6 offset-3">
                  <form onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="card p-3 px-5 mt-60">
                      <img className='acc_img' src={baseURL + user.user.image} alt="" />
                      <input onChange={(e) => { setFirstname(e.target.value) }} defaultValue={user.user.first_name} type="text" className="form-control mt-3" />
                      <input onChange={(e) => { setLastname(e.target.value) }} defaultValue={user.user.last_name} type="text" className="form-control mt-3" />
                      <button type='submit' className="btn btn-primary mt-3 mx-5">O'zgartirish</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </>
      }
    </div>
  )
}

export default account