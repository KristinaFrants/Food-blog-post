import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styled, { keyframes } from "styled-components";
// import { url } from "inspector";
const keyFrame = keyframes`
  0%{
    height: 0%;
    
  }
  100%{
    height: 100%;
    
  }
  100% {
    height: 100%;
  }
`;
const Overlay = styled.div`
	position: absolute;
	bottom: 0;
	background: grey;
	width: 100%;
	opacity: 0.7;
	height: 100%;
	color: white;
	animation: ${keyFrame} 2s ease;
	animation-iteration-count: inherit;
	opacity: ${props => props.opa && props.opop && props.op};
`;
export function Footer() {
	const [opa, setOpa] = useState(0);
	const [opop, setOpop] = useState(0);
	const [op, setOp] = useState(0);
	return (
		<CardGroup style={{ backgroundColor: "black" }}>
			<Card style={{ position: "relative" }} onMouseOver={() => setOpa(0.6)} onMouseLeave={() => setOpa(0)}>
				<Card.Img
					variant="top"
					src="https://cdn.flickeringmyth.com/wp-content/uploads/2019/07/Mandalorian-promo-art-3-1.jpg"
				/>

				<Overlay opa={opa}>
					<p style={{ padding: "4px 4px 4px 4px" }}>
						THE MANDALORIAN His body is shielded by beskar armor, his face hidden behind a T-visored mask,
						and his past is wrapped in mystery. No one is quite sure who this well-equipped stranger is. The
						Mandalorian is battle-worn and tight-lipped, a formidable bounty hunter in an increasingly
						dangerous galaxy.
					</p>
				</Overlay>
			</Card>
			<Card style={{ position: "relative" }} onMouseOver={() => setOpop(0.6)} onMouseLeave={() => setOpop(0)}>
				<Card.Img
					variant="top"
					src="
                    https://cdn.vox-cdn.com/thumbor/r3lV_gaXZzzRigxCtqri5OdIfjE=/0x0:1536x864/920x613/filters:focal(337x270:581x514):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/48434499/tfa_poster_wide_header-1536x864-324397389357.0.0.jpg"
				/>

				<Overlay opa={opop}>
					{" "}
					<p style={{ padding: "4px 4px 4px 4px" }}>
						THE FORCE AWAKENS Thirty years after the Battle of Endor, a new threat has risen in the form of
						the First Order and the villainous Kylo Ren. Meanwhile, Rey, a young scavenger, discovers powers
						that will change her life -- and possibly save the galaxy.
					</p>
				</Overlay>
			</Card>
			<Card style={{ position: "relative" }} onMouseOver={() => setOp(0.6)} onMouseLeave={() => setOp(0)}>
				<Card.Img
					variant="top"
					src="https://m.buro247.sg/images/culture/star-wars-rogue-one-special-effects.jpg"
				/>

				<Overlay opa={op}>
					<p style={{ padding: "4px 4px 4px 4px" }}>
						ROGUE ONE: A STAR WARS STORY From Lucasfilm comes the first of the Star Wars standalone films,
						“Rogue One: A Star Wars Story,” an all-new epic adventure. In a time of conflict, a group of
						unlikely heroes band together on a mission to steal the plans to the Death Star, the Empire’s
						ultimate weapon of destruction. This key event in the Star Wars timeline brings together
						ordinary people who choose to do extraordinary things, and in doing so, become part of something
						greater than themselves.
					</p>
				</Overlay>
			</Card>
		</CardGroup>
	);
}
