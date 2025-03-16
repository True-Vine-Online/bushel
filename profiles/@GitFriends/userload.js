function user_load(){
  /*Edit below line to update your profile's icon*/
  document.getElementById("profileIcon").src = './GitFriends.png'

  /*Edit below line to update your profile's name*/
  document.getElementById("profileName").innerHTML = 'GitFriends'

  /*Edit below line to update your profile's Git handle*/
  document.getElementById("profileGit").innerHTML = '@GitFriends'

  /*Edit below line to update your profile's tagline*/
  document.getElementById("profileTagline").innerHTML = '<h3>Git friends through coding!</h3>'

  /*Edit below line to update your profile's body content*/
  document.getElementById("profileContent").innerHTML = '<p>There have been plenty of networking platforms for programmers, but none have let programmers program in order to network.</p><p> That is what we are changing!</p> <p>Now, developers can program their own networking profiles and connect over their passion - programming.</p>'

  /*Edit the below section to update your profile's links*/
  /*DO NOT CHANGE LINKED SERVICES. THIS MAY BREAK FEATURES OR RESULT IN YOUR PROFILE NOT BEING PUBLISHED*/
  /*Service links*/
  var githubLink = ''
  var gitlabLink = ''
  var gitLink = ''
  var xLink = ''
  var instagramLink = ''

  /*Service Vars*/
  /*DO NOT EDIT LINK ICONS*/
  var githubIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-github.svg'
  var gitlabIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-gitlab.svg'
  var gitIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-git.svg'
  var xIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-x.svg'
  var instagramIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-instagram.svg'

  /*Edit the below innerHTML function to update your profile's links*/
  document.getElementById("profileLinks").innerHTML = ''
    /*<a href="'+[REPLACE WITH SERVICE VAR]+'" class="card-footer-item"> <img src="'+[REPLACE WITH SERVICE ICON]+'" width="50px" alt="Social Button"> </a>*/



  /*Below line will be updated by admin staff to reflect profile creation/update time*/
  document.getElementById("profileTime").innerHTML = '7:54 PM - 15 Mar 2025'

}
