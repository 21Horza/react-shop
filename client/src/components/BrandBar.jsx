import { observer } from 'mobx-react-lite'
import React, {useContext} from 'react'
import { Context } from '../index'
import {Card, Row} from 'react-bootstrap'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    
    return (
        <Row xs='auto' className='d-flex'>
            {device.brands.map(brand => 
                <Card
                    style={{cursor: 'pointer', borderWidth: 2}}
                    key={brand.id}
                    className='p-3'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                >
                    {brand.name}
                </Card>
                )}
        </Row>
    )
})

export default BrandBar