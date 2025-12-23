import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import FurnitureShowcase, { CasaIcon, BagnoIcon, LuceIcon } from '../components/FurnitureShowcase'
import WhySection from '../components/WhySection/WhySection'
import Rock from "../components/Rock/Rock"
import CustomerReviewSection from '../components/CustomerReviewSection/CustomerReviewSection'
import { GalleryToTimeline } from '../components/Energy'
import MasonryGallery from '../components/Energy/MasonryGallery'

import Footer from '../components/LuxuryMarble/Footer'

const Home = () => {
  // Gallery images - hero image matches first timeline section background
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop', alt: 'Interior 1', sizeType: 'small' },
    { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=800&fit=crop', alt: 'Interior 2', sizeType: 'medium' },
    { src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920', alt: 'Solar Energy Field', sizeType: 'hero' },
    { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=800&fit=crop', alt: 'Interior 4', sizeType: 'medium' },
    { src: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=400&h=600&fit=crop', alt: 'Interior 5', sizeType: 'small' },
  ]

  // Masonry Gallery Images - High-end interior portfolio
  const masonryImages = {
    heroBanner: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=2520&h=1080&fit=crop',
    leftVertical: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=1500&fit=crop',
    centerHero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&h=1200&fit=crop',
    rightVertical: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=1600&fit=crop',
    bottomLeft: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&h=1080&fit=crop',
    bottomRight: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1920&h=1080&fit=crop',
  }

  return (
    <div>
      <Header />
      <Hero />

      <FurnitureShowcase />


<GalleryToTimeline
        galleryImages={galleryImages}
        topRightText="We take pride in transforming spaces into personal sanctuaries. Each project reflects our commitment to timeless elegance and meticulous craftsmanship."
        bottomLeftText="Our clients trust us to bring their vision to life with furniture that combines artistry and function. From classic pieces to contemporary designs, every creation tells a unique story of refined living."
        bulletLabel="TRUSTED PARTNERS"
        autoPlayInterval={5000}
        timelineSections={[
          {
            sectionNumber: '01',
            label: 'ENERGY',
            titleText: 'ENERGY',
            backgroundImageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920',
            cardTitle: 'Energy',
            cardSubtitle: 'Global Full-Line Energy Provider',
            cardDescription: 'We are developing environmentally friendly energy generation projects and biofuel projects to meet global needs for energy diversification. As a project organizer, we also offer total solutions in areas including finance and off-take.',
            gridItems: [
              { imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400', label: 'Renewable Energy' },
              { imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400', label: 'Palm Plantations' },
              { imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400', label: 'Biomass' },
              { imageUrl: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400', label: 'Hydrogen' },
              { imageUrl: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=400', label: 'LNG' },
              { imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400', label: 'Project Organizing' },
            ],
          },
          {
            sectionNumber: '02',
            label: 'CHEMICALS',
            titleText: 'CHEMICALS',
            backgroundImageUrl: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=1920',
            cardTitle: 'Chemicals',
            cardSubtitle: 'Advanced Chemical Solutions',
            cardDescription: 'Leading provider of innovative chemical solutions for industrial applications. Our portfolio includes specialty chemicals, polymers, and sustainable materials that drive efficiency and environmental responsibility across global markets.',
            gridItems: [
              { imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400', label: 'Polymers' },
              { imageUrl: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400', label: 'Specialty Chemicals' },
              { imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400', label: 'Petrochemicals' },
              { imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400', label: 'Solvents' },
              { imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400', label: 'Additives' },
              { imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400', label: 'Research & Development' },
            ],
          },
          {
            sectionNumber: '03',
            label: 'STEEL',
            titleText: 'STEEL',
            backgroundImageUrl: 'https://images.unsplash.com/photo-1565193298535-7f47f63bed5e?w=1920',
            cardTitle: 'Steel',
            cardSubtitle: 'High-Performance Steel Manufacturing',
            cardDescription: 'Manufacturing high-quality steel products for construction, automotive, and industrial applications. Our advanced production facilities deliver superior strength, durability, and sustainability in every ton produced.',
            gridItems: [
              { imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400', label: 'Structural Steel' },
              { imageUrl: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400', label: 'Automotive Steel' },
              { imageUrl: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=400', label: 'Stainless Steel' },
              { imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400', label: 'Steel Coils' },
              { imageUrl: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400', label: 'Galvanized Steel' },
              { imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbfaa88?w=400', label: 'Manufacturing Process' },
            ],
          },
          {
            sectionNumber: '04',
            label: 'MATERIALS',
            titleText: 'MATERIALS',
            backgroundImageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920',
            cardTitle: 'Materials',
            cardSubtitle: 'Advanced Materials Technology',
            cardDescription: 'Developing cutting-edge materials for the future. Our research-driven approach delivers innovative solutions in composites, ceramics, and smart materials that enable next-generation products and applications.',
            gridItems: [
              { imageUrl: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=400', label: 'Composites' },
              { imageUrl: 'https://images.unsplash.com/photo-1584448002714-fef35b4c81d6?w=400', label: 'Ceramics' },
              { imageUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400', label: 'Smart Materials' },
              { imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee67447cfc72?w=400', label: 'Nanomaterials' },
              { imageUrl: 'https://images.unsplash.com/photo-1581092583537-20d51876f4b5?w=400', label: 'Biomaterials' },
              { imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400', label: 'Material Science Lab' },
            ],
          },
          {
            sectionNumber: '05',
            label: 'NEW BUSINESS',
            titleText: 'NEW BUSINESS',
            backgroundImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920',
            cardTitle: 'New Business',
            cardSubtitle: 'Innovation & Future Technologies',
            cardDescription: 'Pioneering new frontiers in technology and business. We invest in emerging markets, digital transformation, and disruptive innovations that shape the future of industry and create sustainable value.',
            gridItems: [
              { imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400', label: 'AI & Machine Learning' },
              { imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400', label: 'IoT Solutions' },
              { imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400', label: 'Blockchain' },
              { imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400', label: 'Data Analytics' },
              { imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400', label: 'Digital Innovation' },
              { imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400', label: 'Venture Capital' },
            ],
          },
        ]}
      />

      {/* Masonry Gallery - High-end Interior Portfolio */}
   

      {/* Customer Gallery Section */}

<Rock/>
      {/* Rock Carved Section */}

      {/* Why Section */}
      <WhySection
        label="WHY ROCCIA?"
        heading="Lorem ipsum dolor sit amet consectetur Phasellus sed sed nunc elit aliquam proin Volutpat massa tristique nunc massa Maecenas pretium dolor quis vehicula malesuada."
        paragraph="Lorem ipsum dolor sit amet consectetur. Nulla mi id dui erat vestibulum id neque. Luctus dis feugiat bibendum massa molestie vitae eget felis. Condimentum in eu nisi orci feugiat. In turpis nisi donec non et et. Non vitae commodo tortor porttitor id accumsan convallis nisi. Eu nunc fusce eget porttitor sed lorem. Maecenas est erat cras lectus sapien ullamcorper dolor vel vitae. Ullamcorper nibh sagittis dui nisl phasellus donec sed sociis."
        imageSrc="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop"
        imageAlt="Modern dining room interior"
        stats={[
          { icon: 'globe', number: '100+', label: 'Lorem ipsum' },
          { icon: 'users', number: '15K', label: 'Lorem ipsum' },
          { icon: 'award', number: '30+', label: 'Lorem ipsum' },
        ]}
      />

{/* Gallery to Timeline Transition removed - now at bottom after Luce section */}



      {/* Customer Review Section */}
      <CustomerReviewSection
        reviews={[
          {
            id: 1,
            position: 'left',
            rotation: -18,
            label: 'ONE',
            reviewNumber: '01',
            reviewText: 'Lorem ipsum dolor sit amet consectetur. Nulla donec aliquam morbi dolor adipiscing. Maecenas elit consequat in elementum sed sapien diam. Ligula lorem sem et maecenas rutrum.',
            customerName: 'JOHN DOE'
          },
          {
            id: 2,
            position: 'center',
            rotation: 0,
            label: 'ONE',
            reviewNumber: '01',
            reviewText: 'Lorem ipsum dolor sit amet consectetur. Nulla donec aliquam morbi dolor adipiscing. Maecenas elit consequat in elementum sed sapien diam. Ligula lorem sem et maecenas rutrum.',
            customerName: 'JOHN DOE'
          },
          {
            id: 3,
            position: 'right',
            rotation: 18,
            label: 'ONE',
            reviewNumber: '01',
            reviewText: 'Lorem ipsum dolor sit amet consectetur. Nulla donec aliquam morbi dolor adipiscing. Maecenas elit consequat in elementum sed sapien diam. Ligula lorem sem et maecenas rutrum.',
            customerName: 'JOHN DOE'
          }
        ]}
      />

      {/* Section 1 - Original */}


      
      {/* Gallery to Timeline Transition - Combines gallery expansion with timeline reveal */}


     <MasonryGallery images={masonryImages} enableAnimations={true} />
<Footer/>
    </div>
  )
}

export default Home
