
const buzzItems = [
  { id: 2, title: 'SVG and Lottie', comment: 'SVG\'s are fantastic! Be it icons or animation via Lottie, it\'s a great way to add some life to a website. <br />.. and what about those filters, yum yum droplets..<br /><br />Thank you Chris Lilley aka. "svgeesus"' },
  { id: 3, title: 'CSS', comment: 'Who doesn\'t love CSS...? I\'ve worked with it for years, and I still learn new things.<br />The future is bright.. And what about CSS Houdini and WebGPU.<br />"animation-timeline", woaah!<br />Clip-path and masks... Gradients and filters... Oh my!<br />line-clamp, yea!!<br />SUBGRIIIIIIIID!!!!' },
  { id: 4, title: 'HTML', comment: '' },
  { id: 5, title: 'LocalStorage and SessionStorage and IndexedDB', comment: '.. and SessionStorage, cookies, history and IndexedDB, all the browser storage manipulation stuff.' },
  { id: 6, title: 'A11Y', comment: 'Mostly done AA stuff, but a single AAA site snuck in. What a journey!<br /><br />Axe chrome extension FTW!' },
  { id: 7, title: 'SEO', comment: 'I kinda know what\s going on, but truth be told, who knows everything about this? Not ever Sergej...' },
  { id: 8, title: 'Structured data(JSON+LD and/or microdata)', comment: 'It does make sense to tell stupid machines how the content should be perceived.' },
  { id: 9, title: 'JavaScript', comment: 'I\'ve worked with JavaScript for many years, and I\'ve seen it evolve from nothing to jQuery to React and Vue.<br />I\'m excited about the future!' },
  { id: 10, title: 'WebComponents', comment: 'WebComponents are a great way to encapsulate and reuse components. I\'ve used them in a few projects.<br />Toss in an event emitter and MutationObservers, and you\'re pretty much golden.<br />' },
  { id: 11, title: 'Tailwind and Bootstrap', comment: 'Tailwind is a great tool for rapid development, and it\'s a great way to keep the CSS size smaller.<br />But take only the bits that make sense. Good thing that it has tree shaking..' },
  { id: 12, title: 'GSAP', comment: 'Yum, yum, yum, GreenSock! Thank you for making animations fun and easy... And performant!<br /><br />Glad to see more frequent releases of new features, and the exiting team behind that keeps on growing.' },
  { id: 26, title: 'Animate.css, Anime.js, Velocity.js', comment: 'Yea, tried to libraries out too, but only GSAP stuck..' },
  { id: 13, title: 'Nuxt', comment: 'It\'s just amazing..! And the new version (3.11) is even better. 311 is a good band too btw.<br /><br />I\'ve been deep diving the internals of Nuxt, and i simple love it. The whole UNJS ecosystem provides so many cool tools right at your fingertips!' },
  { id: 14, title: 'ThreeJS / R3F / Trois', comment: '3D should be present on ALL websites, it just makes it look so much cooler. Good job of the pmndrs team for making the R3F and Drei stuff..' },
  { id: 27, title: 'Storybook', comment: 'If you need a component library/inventory, this is the only solution..' },
  { id: 15, title: 'React', comment: '' },
  { id: 16, title: 'NextJS', comment: '' },
  { id: 28, title: 'Lighthouse / Unlighthouse', comment: 'Lots of drill downs using these tools.. Thanks Paul, Paul, Jake and Addi.' },
  { id: 17, title: 'Git and GitFlow', comment: 'Git is fucking awesome.. Put some sprinkle on top with GitButler..! DO IT!<br />GitFlow - "This is the way"!! It\'s actually the only way!<br /><br />Maybe do yourself a favor and watch some of the videos from the guy behind GitButler on YouTube, and get blown away with his git knowledge..! He\'s apparently also the co-founder of GitHub.. (insert mindblown emoji)' },
  { id: 18, title: 'BitBucket and GitLab and GitHub', comment: '...and all the associated CI/CD stuff..' },
  { id: 19, title: 'NodeJS', comment: 'Thanks Ryan!' },
  { id: 20, title: 'NPM / Yarn / PNPM', comment: 'For a long time i swore that Yarn was the only contender with the workspaces feature, but since npm is getting up to speed. Regarding speed, maybe pnpm has the edge atm.' },
  { id: 21, title: 'REST and GraphQL', comment: 'I\'ve done so many integrations that it would be more fun to hear the PI-guy naming all PI digits than me rambling about API\'s and integrations.<br /><br />I was a big fan of GraphQL when it first popped up, but the maintenance of it is a beast of it\'s own......' },
  { id: 22, title: 'PHP and .net', comment: 'The knowledge is in there somewhere(pointing to my head), but I\'m not sure if I want to dig it up..' },
  { id: 23, title: 'SQL', comment: 'My most fun class at my Bachelors..<br /><br />"A SQL query is walking into a bar, walks up to to two tables and asks, "Can i join you?".. badabing.' },
  { id: 24, title: 'Trello / Jira / GitHub Issues / Azure DevOps / GitLab', comment: 'Yea, you need to track stuff.. true dat.<br /><br />Not really a fan of Azure DevOps.. More an Atlassian kind of guy.' },
  { id: 25, title: 'Fun fact', comment: 'Once upon a time i taught Flash..<br /><br />One more; I got certified in Photoshop 5.5.<br /><br />One more; My list of IDE\'s over the years: Notesblok, MS Frames, DreamWeaver, Brackets, Sublime, That Github thingy, VS Code..' },
  // { id: 29, title: 'TITLE', comment: 'TEMPLATE' },
]

const BuzzItem = ({ children }) => {
  return (
    <li>
      {children.title}
      {children.comment ? 
      <div className='comment' aria-hidden="true" dangerouslySetInnerHTML={
          { __html: children.comment }
        } />
      : ''}
    </li>
  )
}

export default function BuzzWords() {
  return (
    <>
      <p>
        Long list of buzz words I've worked with/in/on:
      </p>
      <ul className='-bullets -comments'>
        {[...buzzItems].map((item) => (
          <BuzzItem key={item.id}>
            {item}
          </BuzzItem>
        ))}
      </ul>
    </>
  )
}