# Feedback

_Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview_

## Goals

1.  Working portfolio:

    - For a working portfolio, I think you have reached this goal. It is not finished but is very close.
    - With all of the layouts sorted, you just need to tweak some sizes and add functionality with JS which I am sure you can do.

2.  Practice using Git / Github Flow:

    - Yes, you have 100% achieved this. You will have to keep it up, carry on branching and committing.
    - Your commit messages as well are consistent and informative so keep it up. The more descriptive the better

3.  Application of morning topics
    - Yes, I think you have achieved this goal. I can see you have used everything with have covered so far.
    - You should go over HTML semantic tags and media queries. I will add more on improvements at the end.

---

## Specification

1. README - done

   - Get in the habit of writing README's for every project, you can also add more to this one.

2. BRANCHING - done

   - Nice work on this, one thing to consider is when you go onto a larger project you wil be creating feature branches rather then section branches like you have with this project.

3. SCSS - done

   - Keep on exploring SCSS, look at mixins and other features the pre processor will give you.
   - Move you main.scss inside you scss folder, so you only have files that are used in the root directory

4. Mobile First - to work on

   - I will go into this in the to work on

5. 25 commits - done

---

## Overall

As I said during the demo I think you have relished the chance to apply what we covered in the morning into your project. Kudo's for that. You have a design that matches your figma and thats rad! I am going to give you some constructive feedback to take on to this project and to take forward to your next projects.

---

## To work on

The main points for you to work on are using semantic tags and practicing media queries.

### Semantic tags

I think you are using unnecessary divs.

Below is your `intro` block.

```html
<header>
  <div class="intro" id="introduction">
    <div class="intro__cell intro__cell--name">
      <h1>
        ADAM
        <br />
        D'COSTA
      </h1>
    </div>

    <div class="intro__cell intro__cell--title">
      <h2>Web Developer</h2>
    </div>

    <div class="intro__cell intro__cell--profile">
      <p>
        Hi, I’m Adam and I’m currently undergoing a 12-week intensive course with _nology in order to become a web
        developer in the near future. Please see my recent projects below.
      </p>
    </div>

    <div class="intro__cell intro__cell--button">
      <a class="cta-button" href="#portfolio">See My Work</a>
    </div>
  </div>
</header>
```

This could be shorten to.

```html
<header class="intro" id="introduction">
  <h1 class="intro__cell intro__cell--name">
    ADAM
    <br />
    D'COSTA
  </h1>

  <h2 class="intro__cell intro__cell--title">Web Developer</h2>

  <p class="intro__cell intro__cell--profile">
    Hi, I’m Adam and I’m currently undergoing a 12-week intensive course with _nology in order to become a web developer
    in the near future. Please see my recent projects below.
  </p>

  <a class="intro__cell intro__cell--button cta-button" href="#portfolio">See My Work</a>
</header>
```

In terms of semantics the second is clearer. div's are generally used to group items together so you should not need to put single items inside of them. Unless it is for specific styling purposes.

### Media queries

With your media queries you only need to target the properties that need to change. You do have some code duplication in some of your components.

Some of pages will over flow so you will need to review your current media queries and tweak them.
