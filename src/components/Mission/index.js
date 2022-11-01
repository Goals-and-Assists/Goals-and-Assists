import React from 'react'
import { 
    MissionContainer, 
    MissionH1, 
    MissionWrapper, 
    MissionCard, 
    MissionIcon, 
    MissionH2, 
    MissionP } from './MissionElements'

const Mission = () => {
  return (
    <MissionContainer>
        <MissionH1>Our Mission</MissionH1>
        <MissionWrapper>
            <MissionCard>
                <MissionIcon></MissionIcon>
                <MissionH2>Financial Support</MissionH2>
                <MissionP>
                    Promising student athletes often have the opportunity to earn scholarships to attend top high school
                    programs, of which they may expect to receive complimentary tuition, as well as room and board. This is
                    extremely generous. However, it is not all inclusive, and some students may be coming from
                    circumstances that can make other expenses seem impossible. Things like flights home for summer
                    break or the winter holidays, a cell phone, social events, or even a winter coat. Over the course of a year
                    it is completely normal for these “other” expenses to total in excess $20,000
                    In our research, we have found that some school administrators or parents of other students ultimately
                    end up providing these accommodations and covering these costs, or in other cases these student-
                    athletes simply end up excluded due to their lack of means. We have also learned that as a result of this
                    oversight, schools may have what they consider a negative experience, and cease to offer these types of
                    opportunities even thought they are budgeted for.
                    Donors to Goals and Assists provide the financial stability needed to support these students and these
                    programs. Our student athletes don’t have to worry about whether or not they can attend the
                    homecoming dance, what they will do when the school’s campus closes or winter break, or how they can
                    afford a cell phone. Their needs will be taken care of, and they can focus fully on their academic and
                    athletic commitments. Additionally, by taking care of these students we also provide the sponsoring
                    schools with the peace of mind and positive experiences needed to continue to support their exchange
                    programs well into the future.
                </MissionP>
            </MissionCard>
        </MissionWrapper>
    </MissionContainer>
  )
}

export default Mission