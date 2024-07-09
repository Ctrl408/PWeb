(function ($) {
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        };
        var options = $.extend(defaults, options);

        options.elem.click(function(event){     
            event.preventDefault();
            var offset = ($(this).attr('data-offset')) ? $(this).attr('data-offset') : false,
                position = ($(this).attr('data-position')) ? $(this).attr('data-position') : false;         
            if (offset) {
                var toMove = parseInt(offset);
                $('html,body').stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, options.speed);
            } else if (position) {
                var toMove = parseInt(position);
                $('html,body').stop(true, false).animate({scrollTop: toMove }, options.speed);
            } else {
                $('html,body').stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, options.speed);
            }
        });

    };
})(jQuery);

$(function(){
    $(".scroller").arctic_scroll({
        speed: 600
    });
});


// Get the timer element
const timerElement = document.getElementById('timer');

// Function to update the timer every second
function updateTimer() {
  // Get the current time
  const now = new Date().getTime();
  // Calculate the elapsed time in milliseconds
  const elapsed = now - window.performance.timing.navigationStart;
  // Convert milliseconds to seconds, minutes, and hours
  const seconds = Math.floor((elapsed / 1000) % 60).toString().padStart(2, '0');
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60).toString().padStart(2, '0');
  const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
  // Update the timer display
  timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the timer immediately and start updating every second
updateTimer();
setInterval(updateTimer, 1000);







function openNewPage() {
  // Create a new window or tab
  var newWindow = window.open('', '_blank');
  
  // Write the content of the new page
  newWindow.document.write(`
    
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - TH-blog2</title>
  <link rel="stylesheet" href="./style-th.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="container">
   <center> <h1>Theory of Game</h1></center>
 <center> <h4>Dilemma, policies, decisions and consequences.</h4></center> <center> <h4>12/12/2022</h4></center>
  
  
  <br><br><br>
  <h3>Dilemma of decisions.</h3>
  
 <div class="quote-container">
    <p class="quote-text"> " To be, or not to be, that is the question "</p>
    <p class="quote-author"> -   William Shakespeare. Hamlet.</p>
</div>
  <p> Shakespeare's Julius Caesar manifests a classic dilemma of decision making.

The state of Rome, Marullus and Flavius triumphs as Julius Caesar returns from war, Conspirators and his fellow senator Marcus Brutus suspicious of Caesar

accepting offers to become the emperor, plots to assassinate Caesar, Warned of the Ides, 15th of March, Caesar ignores. The consequences of his decisions

can be far-reaching and irreversible. At the capitol Cesar is stabbed by the conspirators followed by Brutus , Julius Caesar enounce his final

words "Et tu, Brute?" (Also you?). His decision collapses the Roman Republic.</p>
  
  
    <h3>The Game</h3>

  
   <div class="quote-container">
    <p class="quote-text"> " All the world's a stage, And all the men and women merely players "</p>
    <p class="quote-author">  - William Shakespeare. As you like it.</p>
</div>
  
  <p>The sole intention of the mind is to maximize its utility function, which is the perceived rewards of different outcomes. When an individual consciously or unconsciously takes actions to maximize their utility function, they are said to be engaged in a game. A game is a theoretical framework used to study the decision-making and behavior of rational individuals in strategic situations, and how the interactions between these individuals can lead to specific outcomes. Four key components define the structure and dynamics of a game: the players involved, the rules that govern the game, the strategies (policy) available to the players, and the payoffs or rewards associated with different outcomes.</p>
  

      <h3>Decisions and Consequences</h3>
      <p>1 and 2 are two players, each cell in the table represents possible policies and the consequences of their decisions</p>
  <img src="https://bpb-us-e1.wpmucdn.com/blogs.cornell.edu/dist/a/1688/files/2017/10/Screen-Shot-2017-10-22-at-4.28.14-PM-t0cfd0.png" class="my-image-style">


 
<p>
Player A's decision alone can't control the course of the game, A also has no control over the decisions of B. Which establishes a game frame of 4 strategic possibilities.</p>
  
<p>
This is a classic example of a non-cooperative game, where the choice of strategies by either players are ambiguous to each other and thus they are made to act in a dilemma, their actions and payoffs highlight their values in mutual trust and their incentives to act selflessly.</p>
  
    <h3>The Nash Equilibrium.</h3>
  <p>The trail of a game progresses until one achieves their laurels, essentially every game evolves to a state where no one can improve their outcome by changing their strategy unilaterally. A situation where each player's strategy is the best response to the strategies chosen by the other players. At the Nash Equilibrium they both experience the pinnacle of their rewards. </p>
  
    <h3>The Diminishing Utility.</h3>
     <div class="quote-container">
    <p class="quote-text"> " The rest is silence. "</p>
    <p class="quote-author">  - William Shakespeare. Hamlet.</p>
</div>
  <p>Mortality is inevitable, nothing lasts forever, such is true of every game. The peaks of excitement and the rewards that come with them are fleeting and will eventually die over time. As time passes, the rewards begins to fade and we are left in the reality of diminishing utility.</p>

  

  
</div>
<!-- partial -->
  
</body>
</html>
  `);
  
  // Close the document stream
  newWindow.document.close();
}












function openNewPage1() {
  // Create a new window or tab
  var newWindow = window.open('', '_blank');
  
  // Write the content of the new page
  newWindow.document.write(`

<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - EC-blog1</title>
  <link rel="stylesheet" href="./style-ec.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="container">
   <center> <h2>Is Effective Altruism Really Effective?</h2></center>
 <center> <h4>Economic Custodianship over Effective Altruism</h4></center>
  
  <p>A stranger digital acquaintance, once asked me: ”What would you do with a
billion dollars and limited time to invest?”, Lin was an effective altruist from California and was visiting India for her recent FTX-funded project.  Lin seemed curious about an altruistic answer. While I lacked one, I could sense the intent behind her question. We discussed about Economic custodianship, i.e caping down surplus profit in sectors that may seem unethical as businesses with, such as healthcare. with commercialization reserved solely for the purpose of replenishment.</p>
  
  <p>While Lin’s actions lean towards altruism, my thoughts couldn’t fully align with
the idea of fully externally financed charity for a long run. What worse could
happen if the funding were abruptly cut off? Recently FTX, one of the largest
cryptocurrency exchanges in the world, lost all of its value, and it has been quite
challenging for many organizations as FTX went bankrupt, as all the disclosed
donations of around $160 million are at risk of being repaid.</p>
  
  <p>EA in philosophy aims to mitigate world sufferings. It sounds almost unobjectionable. How could you object to altruism? But do we question its effectiveness?
I would be described as a demon if I appeal to portraying EA as ineffective, but my
intent here is not to criticize mass effective altruism. In fact, I support it. But we
need a least futile approach in solving world sufferings.</p>
  
  <div class="quote-container">
    <p class="quote-text">There is no free will. There is only the dream of it.</p>
    <p class="quote-author">- Chuck Palahniuk</p>
</div>
  
  <p>Economics operates within a dynamic framework of reward and loss parameters.
In the context of EA, intentionally prioritizing rewards at the expense of altruism
disrupts the cycle of sustaining the economic game frame, lacking the skill for replenishment on the weaker side. The essence of any economic game lies in the utility
function, maximizing utility to address needs and necessities. Amidst losses and rewards, there is an economic decision-making function that optimizes utility—a skill
that must be acquired. Without considering consequences, this function cannot be
effectively optimized, as illustrated in the case of EA.</p>
   <br>
  
  <h3>Monoculture</h3>
  <p>EA worldview is the conception of ”good” in contrast to the capitalist/utilitarian
worldview. However, this conception raises questions about its consistency, especially concerning emerging consensus inclinations that may not authentically reflect
genuine needs and necessities but rather follow a trend. Effective altruists might
not be humanistic when it comes to prioritizing genuine needs; instead, they often
adhere to a monoculture that garners significant attention in society.
</p>
  <h3><strong>Constrained Economics</strong></h3>
  <p>It could be a moral dilemma when it comes to Economic Custodianship over Effective Altruism (EA). Would you spend $60 billion on vaccines for immediate impact,
or rather allocate $60 to corporate research to lower costs, ensuring affordability for
everyone in the long run?
EC emphasizes addressing the root cause of necessities without disrupting the
cycle and Nash equilibrium of the economic game frame. Capitalism in EC is
constrained to the needs of replenishment instead of surplus profit. The necessities
are intentionally left unaddressed, requiring self-fulfillment as opposed to being left
unresolved for others to contend with. This re installs the economic feedback loops
and Nash equilibrium. EC worldview emphasizes self-dependency while minimizing
net profit. This ensures an increased flow of utility, thereby easing the necessities.
Ultimately, EC aims to create a more resilient and equitable framework for
navigating the complexities of economics rather than altruism</p>
  <p></p>
  <p></p>
  
</div>
<!-- partial -->
  
</body>
</html>

  `);
  
  // Close the document stream
  newWindow.document.close();
}





function Open() {
      // Navigate the current window to the new page
      window.location.href = 'index-out.html';
    }