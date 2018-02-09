<template>
	<div class="home">
		<div class="background background--image">
			<div class="background background--color">
		</div>
		<div class="header">
			<h1 class="header__text blink">Hi, I'm Tim<router-link to="/easteregg" class="background__easteregg">.</router-link></h1>
			<span class="header__button button button--inverted" v-scroll-to="'.contact'">Click to get in touch</span>
		</div>
		<div class="scroll-down" v-scroll-to="'.container'">
			Learn more
			<i class="material-icons scroll-down__icon">expand_more</i>
		</div>
		</div>
		<div class="container">
			<div class="projects__title"> My projects </div>
			<div class="projects">
				<div class="projects__block--container">
					<div class="projects__block projects__block--1"> </div>
					<router-link to="/millman" class="button">Click for more</router-link>
				</div>
				<div class="projects__block--container">
					<div class="projects__block projects__block--2"> </div>
					<router-link to="/ftsf" class="button">Click for more</router-link>
				</div>
				<div class="projects__block--container">
					<div class="projects__block projects__block--3"> </div>
				</div>
			</div>
			<div class="skills">
			<div class="skills__title"> Skills </div>
			<div class="skills__image-container">

			</div>
				<div class="skills__container">
					<div class="skills__block">
						Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
					</div>
					<div class="skills__block">
						Lorem ipsum dolor sit amet, mea ea laboramus hendrerit, dicam vivendum sententiae sit et. Pro ex persius legimus, ex duo falli choro salutatus. Qui lorem partiendo id. In pro vide rationibus. Vituperata incorrupte omittantur no vix, adhuc equidem propriae eu sed. Est ei velit vivendum honestatis, ea odio definitiones eos.
					</div>
				</div>
			</div>
			<div class="about">
			<div class="about__title"> My Life </div>
				<div class="about__image"></div>
				<div class="about__container">
					<div class="about__block">
						As you can tell by the title, I'm Tim! <br> I'm just a regular guy with a passion for coding and all Apple related stuff.<br> In my free time I like to go to the gym or drink some beer with friends. Of course I will never say no to a game of CoD or Battlefield. <br> I like to keep updated with the latest technology by reading posts on websites like Tweakers or Reddit. 
					</div>
					<div class="about__block">
						Once I get more things to talk about I'll fill up this block too. Did you find the easter egg yet? It was kind of intented for my girlfriend but don't worry, you're allowed to loom for it too. Anyway lets be real, do people even read the second block? If you do though, I'm glad you did because otherwise I would be typing this for nothing.
					</div>
				</div>
			</div>
			<div class="contact__title"> Get in touch </div>
			<div class="contact">
				<form @submit.prevent="validateBeforeSubmit">
					<div class="contact__form">
						<div class="contact__block">
							<label>Email &#42;</label>
							<p class="contact__container">
								<input name="email" class="contact__input" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="email" placeholder="Email" required oninvalid="this.setCustomValidity('Please enter valid email')" oninput="setCustomValidity('')">
							</p>

							<label>Name &#42;</label>
							<p class="contact__container">
								<input name="name" class="contact__input" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name" required>
							</p>

							<label>Phone</label>
							<p class="contact__container">
								<input name="phone" class="contact__input" v-model="phone" v-validate="'numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="number" placeholder="Phone">
							</p>
						</div>
						<div class="contact__block contact__block--right">
							<label>Info &#42;</label>
							<textarea name="info" class="contact__input contact__input--textarea" v-model="info" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('info') }" placeholder="Tell me about your project" required></textarea>
						</div>
					</div>
					<p class="contact__container contact__container--button">
						<button class="button button--inverted" type="submit">Submit</button>
					</p>
				</form>
			</div>
			<div class="footer">
				<div class="footer__block">
					<div class="footer__block--icons">
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
					<div class="footer__block--text">
						Created by me &copy; 2018.
					</div>
				</div>
			</div>
			<div v-scroll-to="'.background'">
				<i class="material-icons  scroll-up">expand_less</i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'form-contact',
  data: () => ({
    email: '',
    name: '',
    phone: '',
    info: ''
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
		//   console.log('Sorry this funtion is not functional yet');
		  console.log({email: this.email, name: this.name, phone: this.phone, info: this.info});
          return;
        }
      });
    }
  },
  computed: {
    getName() {
      return this.name;
    }
  }
};
</script>
<style lang="scss">
@import '~@/main.scss';

.home {
	height: auto;
	font-family: Montserrat, sans-serif;
}

.background {
	position: absolute;
	top:0;
	left:0;
	width: 100%;
	overflow: hidden;
	height: 100%;
	z-index: 2;

	&--image {
		background-image: url("../images/laptop.jpeg");
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;


		@media only screen and (max-width: $tablet) {
			justify-content: flex-start;
		}
	}

	&--color {
		background-image: linear-gradient(to bottom right, $tim--main, $tim--tertiar);
		opacity: .6;
	}
}

.header {
	display: flex;
	flex-direction: column;

		&__text{
			position: relative;
			font-size: 6em;
			font-weight: $heavy;
			color: $tim--white;
			width: 100%;
			z-index: 3;
			margin: 0 auto;
			text-align: center;

			@media only screen and (max-width: $tablet) {
				font-size: 4em;
				margin: 200px auto 75px;
			}
			
			@media only screen and (max-width: $tablet-small) {
				font-size: 3.3em;
			}
		}

		.blink{
			white-space: nowrap;
			overflow: hidden;
			transform: translateY(-50%);
			border-right: 2px solid rgba(255,255,255,.75);
			animation: typewriter 2500ms steps(44) 1s 1 normal both, blinkTextCursor 600ms steps(40) infinite normal;
		}

		@keyframes typewriter{
			from{width: 25%;}
			to{width: 100%;}
		}

		@keyframes blinkTextCursor{
			from{border-right-color: rgba(255,255,255,.75);}
			to{border-right-color: transparent;}
		}

		&__button {
			z-index: 3;
			width: 200px;
			
			@media only screen and (max-width: $tablet) {
				width: 240px;
			}
		}
}

.background__easteregg {
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
	
	&__title {
		font-size: 2em;
		color: $tim--title;
		font-weight: $heavy;
		width: 100%;
		padding: 50px 0 0;
	}

	&__block {
		display: flex;
		color: $tim--main;
		height: 250px;
		border: 1px solid $tim--secondair;
		border-radius: 10px;
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
			background: url("../images/millman.png") no-repeat;
			background-size: cover;	
			filter: blur(5px);
		}
	}
}

.skills {
	display: flex;
	flex-direction: column;
	height: auto;
	width: 100%;
	background-color: $tim--main;
	color: $tim--main-text;
	padding: 50px 0;
	
	&__title {
		font-size: 2em;
		color: $tim--title;
		font-weight: $heavy;
		width: 100%;
		padding-bottom: 50px;
		background-color: $tim--main;
	}

	&__image {
		height: 200px;
		width: 150px;
		margin: 0 auto 50px;
		background: url("../images/tim.png") no-repeat center;
		background-size: contain;
	}

	&__container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;

		@media only screen and (max-width: $tablet) {
			flex-direction: column;
		}
	}
	
	&__block {
			font-size: 1.1em;
			text-align: justify;
			width: 400px;
			line-height: 23px;

			@media only screen and (max-width: $tablet) {
				width: 90%;
				padding-bottom: 25px;
				margin: 0 auto;
				font-size: 1.1em;
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
	
	&__title {
		font-size: 2em;
		color: $tim--title;
		font-weight: $heavy;
		width: 100%;
		padding-bottom: 50px;
		background-color: $tim--secondair;
	}

	&__image {
		height: 200px;
		width: 150px;
		margin: 0 auto 50px;
		background: url("../images/tim.png") no-repeat center;
		background-size: contain;
	}

	&__container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;

		@media only screen and (max-width: $tablet) {
			flex-direction: column;
		}
	}
	&__block {
		color: $tim--main-text;
		font-size: 1.1em;
		text-align: justify;
		width: 400px;
		line-height: 23px;

		@media only screen and (max-width: $tablet) {
			width: 90%;
			padding-bottom: 25px;
			margin: 0 auto;
			font-size: 1.1em;
		}
	}
}

.contact {
	background-color: $tim--main;
	color: $tim--main-text;
	height: auto;
	width: 100%;
	padding: 20px 0;

	&__form {
		display: flex;
		flex-direction: row;
		justify-content: center;

		@media only screen and (max-width: $tablet) {
			flex-direction: column;
		}
	}

	&__block {
		display: flex;
		flex-direction: column;
		padding: 0 20px;

		&--right {
			margin: auto 0;

			@media only screen and (max-width: $tablet) {
				margin: auto auto;
			}
		}
	}
	
	&__title {
		background-color: $tim--main;
		color: $tim--title;
		font-size: 2em;
		font-weight: $heavy;
		width: 100%;
		padding: 50px 0 0;
	}

	&__container {
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 330px;
		height: 80px;

		@media only screen and (max-width: $phone-small) {
			width: 290px;
		}

		&--button {
			margin-top: 30px;
		}
	}

	&__input {
		padding: 10px;
		margin: 10px;
		border: 1px solid $tim--main;
		border-radius: 5px;
		color: $tim--tertiar;

		&--textarea {
			height: 150px;
			width: 310px;

			@media only screen and (max-width: $phone-small) {
				width: 230px;
			}
		}
	}
}
</style>
