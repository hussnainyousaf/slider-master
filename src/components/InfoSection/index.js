import React from 'react'
import {InfoContainer,Column2,InfoWrapper,InfoRow,Column1,TextWrapper,TopLine,Heading,Subtitle} from './InfoElements'

const InfoSection = () => {
    return (
        <>
        <InfoContainer>
         <InfoWrapper>
         <InfoRow>
                    <Column1>
                    <TextWrapper>
                        
                        <Heading>GROUND-TRUTH<br/>DATA EVERYONE<br/>TRUSTS</Heading>
                        
                        
                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <TopLine>We have combined the best-of-breed technology platforms with an eye towards relieving you of administrative burden. Matterport 3D scans augmented by TruePlan are used to generate consistent Xactimate sheets that are delivered in accord with Actionable Insights compliance rule sets. Each mpartial is produced with full transparency, unprecedented forensic photography, and infallible geospatial data that collectively result in rapid approvals</TopLine>
                    </Column2>
                </InfoRow>
         </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection
