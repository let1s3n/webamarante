import React, { useState, useEffect, useRef } from 'react'

import Link from 'next/link'
import { Container, Carousel, Row, Col, CardGroup, Card, Image } from 'react-bootstrap'

import Loader from '../../elements/Loader/Loader'

import useWindowDimensions from "../../../hooks/useWindowDimensions";

const Home = () => {

  const { height, width } = useWindowDimensions();


  const [loading, setLoading] = useState(true);

  return (
    <>

      <section className="hero-section">
        

      </section>

    </>

  )
}

export default Home