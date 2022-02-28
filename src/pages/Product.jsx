import React from 'react'
import '../styles/sass/Product.scss'

import Element from '../components/Element'
import Section, {SectionBody, SectionTitle} from '../components/Section'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import ProductView from '../components/ProductView'

import productData from '../assets/fake-data/products'
import { useParams } from 'react-router-dom'

const Product = props => {

    const params = useParams()

    const product = productData.getProductBySlug(params.slug)

    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Element title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product}/>
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Read More
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                />   
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Element>
    )
}

export default Product