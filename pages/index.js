import styled from 'styled-components'
import db from '../db.json'
import Button from '../src/Components/Button'
import Footer from '../src/Components/Footer'
import GitHubCorner from '../src/Components/GitHubCorner'
import QuizBackGround from '../src/Components/QuizBackGround'
import QuizContainer from '../src/Components/QuizContainer'
import QuizLogo from '../src/Components/QuizLogo'
import Widget from '../src/Components/Widget'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

// const BackgroundImage = styled.div`
// background-image: url(${db.bg});
// flex: 1;
// background-size: cover;
// background-position: center;
// `

// export const QuizContainer = styled.div`
// width: 100%;
// max-width: 350px;
// padding-top: 45px;
// @media screen and (max-width: 500px){
//   margin: auto;
//   padding: 15px;
// }
// `;

export default function Home() {
  return (
<QuizBackGround backgroundImage={db.bg}>
<QuizContainer>

<Widget>
<Widget.Header>
<h1>Machine Learning</h1>
  </Widget.Header>
  <Widget.Content>
  <p>OPaaaa lele</p>
  </Widget.Content>
  </Widget>  
  <Widget>
<Widget.Header>
  <h1>Quizes da Galera</h1>
  </Widget.Header>
   <Widget.Content>
  <p>Outros assuntos</p>
  </Widget.Content>
  </Widget>  
  <Footer/>
  <a href="https://www.freepik.com/photos/technology">Technology photo created by kjpargeter - www.freepik.com</a>
</QuizContainer>
<GitHubCorner projectUrl="https://github.com/dlimapo/machine-learning-quiz"/>

</QuizBackGround>
  )

}
