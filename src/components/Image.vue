<template>
    <div>
        <img 
        style="display: block; margin-left: auto; margin-right: auto; margin-bottom: 200px; width: 70%;"
        src='https://image.freepik.com/free-vector/happy-children-jumping-summer-meadow_74855-5852.jpg'
        >
    </div>
</template>

<script>
export default {
    name: "Image"
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@1,700&family=Lobster&family=Road+Rage&display=swap');

* {
    text-decoration: none;
    margin: 0;
    padding: 0;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Lobster', cursive;
}


.nav-option {
    position: relative;
    margin-top: 25px;
    margin-bottom: 100px;
}

.wrapper {
    width:  1100px;
    margin: auto;
    position: relative;
}

.logo a {
    font-size: 50px;
    font-weight: 800;
    float: left;
    color: #FD6F96;
    transition: 0.3s;
}

.menu {
    float: right;
}

nav {
    width: 100%;
    margin: auto;
    display: flex;
    line-height: 80px;
    top: 0;
    background: white;
    margin-bottom: 0;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

nav ul li {
    float: left;
}

nav ul li a {
    color: #6F69AC;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 0px 16px 0px 16px;
    text-decoration: none;
    transition: 0.3s;
}

nav ul li a:hover {
    color: #FD6F96;;
}

section {
    margin: auto;
    display: flex;
    margin-bottom: 0px;
    margin-top: 25px;
    height: 500px;
}

.image-2 {
    margin-left: 50px;
    width: 400px;
    height: fit-content;
}

.image {
    margin-right: 50px;
    width: 400px;
    height: fit-content;
}

.column {
    margin-top: 50px;
    margin-bottom: 50px;
    font-family: 'Comic Neue', cursive;
}

.description {
    font-size: 28px;
    font-weight: bold;
    color: #6F69AC;
}

.description-2 {
    font-size: 18px;
    font-weight: bold;
    color: #6F69AC;
}

h2 a {
    font-family: 'Comic Neue', cursive;
    font-weight: 800;
    font-size: 45px;
    margin-bottom: 20px;
    color: #FD6F96;
    width: 100%;
    line-height: 50px;
}

h2 a:hover {
    color: #c08696;;
}

a.button-submit {
    border-radius: 1;
    border: white;
    background: #FD6F96;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px 10px 10px 10px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    transition: 0.1s;
}

a.button-submit:hover {
    border-radius: 1;
    border: white;
    font-size: 24px;
    background: #f1527d;
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px 20px 15px 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
}

p {
    margin: 10px 0px 10px 0px;
    padding: 10px 0px 10px 0px;
}

::-webkit-scrollbar {
    width: 15px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
}

::-webkit-scrollbar-thumb {
    background: #FD6F96;
}

::-webkit-scrollbar-thumb:hover {
    background: #6F69AC
}
</style>