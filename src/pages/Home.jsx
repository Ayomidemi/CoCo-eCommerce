import React from "react";
import { Link } from "react-router-dom";

import Slider from "../components/Slider";
import Helment from "../components/Helment";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Policy from "../components/Policy";
import policy from "../assets/fake-data/Policy";
import Grid from "../components/Grid";

import ProductCard from "../components/ProductCard";
import productData from "../assets/fake-data/products";
import Counter from '../components/Counter';


const Home = () => {
  return (
    <div>
      

     
      <Helment />

    
    
      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link key={index} to="/policy">
                <Policy
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end policy section */}

     
     
      {/* best selling section */}
      <Section>
        <SectionTitle>Best Selling Dresses</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end best selling section */}

      
      
      {/* counter section */}

        <Section>
          <SectionTitle>Our Numbers</SectionTitle>
 
            <Counter >

           </Counter>
           
        </Section>

      {/* end of counter section */}



      {/* new arrival section */}
      <Section>
        <SectionTitle>New Arrival</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new arrival section */}



      {/* slider */}
      <Section>
        <SectionTitle>Our Favorite Couples</SectionTitle>

        <Slider />
      </Section>
      {/* end slider */}



      {/* popular product section */}
      <Section>
        <SectionTitle>Popular Dresses</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    
    
      {/* end popular product section */}

    
      
   
    </div>
  );
};

export default Home;
