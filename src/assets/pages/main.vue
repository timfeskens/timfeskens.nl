<template>
	<div class="home">
		<div class="bg">
			<div class="bg--color">
		</div>
		<div class="bg__title">
			<span class="bg__title--text">Hi, I'm Tim<router-link to="/easteregg" class="bg--easteregg">.</router-link></span>
			<span class="blink">|</span>
		</div>
		<i class="material-icons to-bottom" v-scroll-to="'.container'">expand_more</i>
		</div>
		<i class="material-icons to-top" v-scroll-to="'.bg'">expand_less</i>
		<div class="container">
			<div class="projects--title"> My projects </div>
			<div class="projects">
				<div class="projects__block--container">
					<div class="projects__block projects__block--1"> </div>
					<a class="projects__block--button">Click for more</a>
				</div>
				<div class="projects__block--container">
					<div class="projects__block projects__block--2"> </div>
					<a class="projects__block--button">Click for more</a>
				</div>
				<div class="projects__block--container">
					<div class="projects__block projects__block--3"> </div>
				</div>
			</div>
			<div class="about--title"> My Life </div>
			<div class="about">
				<div class="about__image"></div>
				<div class="about__block">
					<div class="about__block--1">
						Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
					</div>
					<div class="about__block--2">
						Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
					</div>
				</div>
			</div>
			<div class="social">
				<div class="social__block">
					<div class="social__block--icons">
						<a target="_blank" href="///www.linkedin.com/in/timfeskens">
							<svg class="svg-icon svg-icon--linkedin" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
						</a>
						<a target="_blank" href="//www.github.com/timfeskens">
						<svg class="svg-icon svg-icon--github" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
						</a>
						<a target="_blank" href="//www.twitter.com/timfeskens_/">
						<svg class="svg-icon svg-icon--twitter" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
						</a>
					</div>
				</div>
			</div>
			<i class="material-icons to-top--phone" v-scroll-to="'.bg'">expand_less</i>
		</div>
	</div>
</template>
<style lang="scss">
@import '~@/main.scss';
.home {
	height: auto;
	font-family: 'Montserrat', sans-serif;

	.to-bottom {
		font-size: 4em;
		color: $tim--white;
		z-index: 3;
		cursor: pointer;
		opacity: .4;
		transition-duration: 500ms;

		&:hover, &:focus {
			opacity: 1.0;
			transition-duration: 500ms;
		}

		@media only screen and (max-width: $tablet) {
           font-size: 3em;
		   background: $tim--main;
		   border-radius: 46px;
		   padding: 6px 26px;
		   margin-top: 100px;
        }
	}

	.to-top {
		position: fixed;
		right: 10px;
		bottom: 10px;
		font-size: 4em;
		color: $tim--black;
		z-index: 1;
		cursor: pointer;
		opacity: .3;
		transition-duration: 500ms;

		&:hover, &:focus {
			opacity: 1.0;
			transition-duration: 500ms;
		}

		&--phone {
			display: none;
			font-size: 3em;
			background: $tim--main;
			color: $tim--white;
			border-radius: 46px;
			width: 50px;
			padding: 6px 26px;
			margin: 0 auto 50px;
			cursor: pointer;
			opacity: .3;

			&:hover, &:focus {
				opacity: 1.0;
				transition-duration: 500ms;
			}

			@media only screen and (max-width: $tablet) {
				display: block;
			}
		}

		@media only screen and (max-width: $tablet) {
           display: none;
		}
	}

	.bg {
		position: absolute;
		top:0;
		left:0;
		width: 100%;
		overflow: hidden;
		height: 100%;
		background-image: url("../images/laptop.jpeg");
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		z-index: 2;

		&--color {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(to bottom right, $tim--secondair, $tim--black);
			opacity: .6;
			z-index: 2;
		}
	}

	.bg__title {
		display: flex;
		flex-direction: row;

		@media only screen and (max-width: $tablet) {
					display: block;
					text-align: center;
					z-index: 4;
		}

		&--text {
			font-size: 6em;
			font-weight: $heavy;
			text-align: center;
			color: $tim--white;
			z-index: 3;
			overflow: hidden;
			white-space: nowrap;
			animation: typing 3s steps(40, end);
			animation-fill-mode: forwards;
			width: 0;
		
			@keyframes typing {
				from { width: 0 }
				to { width: 100% }
			}

			@media only screen and (max-width: $tablet) {
				overflow: hidden;
				white-space: initial;
				animation: none;
				width: 100%;
			}
		}

		.blink {
			font-size: 6em;
			font-weight: $heavy;
			color: $tim--white;
			z-index: 3;
			animation: blink 1200ms infinite;
			height: 1em;

			@keyframes blink {
				0% {opacity: 0}
				49%{opacity: 0}
				50% {opacity: 1}
			}
		}
	}
	
	.bg--easteregg {
		text-decoration: none;
		color: $tim--white;
		cursor: auto;

		&:hover, &:visited, &:active {
			color: $tim--white;
		}
	}

	.container {
		position: absolute;
		top: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		text-align: center;
        color: $tim--black;
	}

	.projects {
		display: flex;
		justify-content: space-around;
		flex-direction: row;
		height: auto;
		width: 100%;
        color: $tim--main;
		padding: 40px 0 60px;
		
		@media only screen and (max-width: $tablet) {
			flex-direction: column;
			padding: 0 0 40px;
        }
		
		&--title {
			font-size: 2em;
			font-weight: $heavy;
			width: 100%;
			padding: 50px 0 0;
		}
	
		&__block {
			display: flex;
			color: $tim--main;
			height: 250px;
			border: 1px solid $tim--secondair;
			margin-bottom: 35px;

			&--container {
				width: 30%;

				@media only screen and (max-width: $tablet) {
					width: 90%;
					margin: 40px auto;
				}
			}
			
			&--1 {
				background: url("../images/millman.png") no-repeat;		
				background-size: cover;
			}

			&--2 {
				background: url("../images/ftsf.png") no-repeat;
				background-size: cover;	
			}

			&--3 {
				background: url("../images/ftsf.png") no-repeat;
				background-size: cover;	
				filter: blur(5px);
			}

			&--button {
				border: 2px solid $tim--main;
				cursor: pointer;
				border-radius: 46px;
				width: 50px;
				padding: 10px 26px;
				transition-duration: 500ms;

				&:hover, &:focus {
					background-color: $tim--main;
					transition-duration: 500ms;
					color: $tim--secondair;
				}

				@media only screen and (max-width: $tablet) {
					font-size: 1.3em;
				}
			}
		}
	}

	.about {
		display: flex;
		flex-direction: column;
		height: auto;
        width: 100%;
        background-color: $tim--secondair;
        padding: 50px 0;
		
		&--title {
			font-size: 2em;
			font-weight: $heavy;
			width: 100%;
			padding: 50px 0 0;
            background-color: $tim--secondair;
		}

		&__image {
			height: 200px;
			width: 150px;
			margin: 0 auto 50px;
			background: url("../images/tim.png") no-repeat center;
			background-size: contain;
		}

		&__block {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			@media only screen and (max-width: $tablet) {
				flex-direction: column;
        	}

			&--1, &--2 {
				color: $tim--main;
				font-size: 1.1em;
				text-align: justify;
				width: 400px;

				@media only screen and (max-width: $tablet) {
					width: 90%;
					padding-bottom: 25px;
					margin: 0 auto;
					font-size: 1.1em;
        		}
			}
		}
	}

	.social {
		display: flex;
		flex-direction: column;
		height: auto;
        width: 100%;
        background-color: $tim--white;
		padding: 50px 0;
		
		@media only screen and (max-width: $tablet) {
			width: 90%;
			margin: 0 auto;
		}

		&__block {
			
			&--icons {
				display: flex;
				flex-direction: row;
				justify-content: center;

				@media only screen and (max-width: $tablet) {
					justify-content: space-between;
				}
			}

			.svg-icon {
				height: 30px;
				width: auto;
				padding: 10px;
				cursor: pointer;
				fill: $tim--main;

				@media only screen and (max-width: $tablet) {
					height: 50px;
        		}

				&--linkedin {
					&:hover {
						fill: #007bb6;
					}
				}

				&--github {
					&:hover {
						fill: #000;
					}
				}

				&--twitter {
					&:hover {
						fill: #1da1f2;
					}
				}
			}
		}
	}
}
</style>
