import {Row, Col, Card} from 'react-bootstrap';

export default function About(){
	return(
		<div className="div-about d-sm-flex p-4">
		<Row id="about-row">

			<Col>
				<Card>
					<Card.Body className="cards-about">
						<h2 className="about-header text-center">ABOUT US</h2>
						<Card.Text className="text-about">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. 
						</Card.Text>
					</Card.Body>
				</Card>

			</Col>

			<Col>
				<Card>
					<Card.Body className="cards-about">
						<h2 className="about-header text-center">WHY CHOOSE US</h2>
						<Card.Text className="text-about">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. 
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

		</Row>
		</div>
	)
}
