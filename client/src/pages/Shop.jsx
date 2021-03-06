import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import BrandBar from '../components/BrandBar'
import DeviceList from '../components/DeviceList'
import Pages from '../components/Pages'
import TypeBar from '../components/TypeBar'
import { getBrands, getDevices, getTypes } from '../http-service/deviceApi'

const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
    getTypes().then(data => device.setTypes(data))
    getBrands().then(data => device.setBrands(data))
    getDevices(null, null, 1, 2).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    }) //pagination
  }, [])

  useEffect(() => {
    getDevices(device.selectedType.id, device.selectedBrand.id, device.page, 4).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand])

  return (
    <Container className='mt-1'>
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  )
})

export default Shop