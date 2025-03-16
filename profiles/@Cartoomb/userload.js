function user_load(){
  /*Edit below line to update your profile's icon*/
  document.getElementById("profileIcon").src = 'https://avatars.githubusercontent.com/u/136763548?s=200&v=4'

  /*Edit below line to update your profile's name*/
  document.getElementById("profileName").innerHTML = 'Cartoomb'

  /*Edit below line to update your profile's Git handle*/
  document.getElementById("profileGit").innerHTML = '@Cartoomb'

  /*Edit below line to update your profile's tagline*/
  document.getElementById("profileTagline").innerHTML = 'Digging up unheard stories'

  /*Edit below line to update your profile's body content*/
  document.getElementById("profileContent").innerHTML = 'There is always an unheard story, so let us tell them together.'

  /*Edit the below section to update your profile's links*/
  /*DO NOT CHANGE LINKED SERVICES. THIS MAY BREAK FEATURES OR RESULT IN YOUR PROFILE NOT BEING PUBLISHED*/
  /*Service links*/
  var githubLink = 'https://github.com/Cartoomb'
  var gitlabLink = ''
  var gitLink = ''
  var xLink = 'https://x.com/cartoomb'
  var instagramLink = 'https://www.instagram.com/cartoomb/'

  /*Service Vars*/
  /*DO NOT EDIT LINK ICONS*/
  var githubIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-github.svg'
  var gitlabIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-gitlab.svg'
  var gitIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-git.svg'
  var xIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-x.svg'
  var instagramIcon = 'https://source.jborgarts.com/GitFriends/source/icons/brand-instagram.svg'

  /*Edit the below innerHTML function to update your profile's links*/
  document.getElementById("profileLinks").innerHTML = '<a href="'+githubLink+'" class="card-footer-item"> <img src="'+githubIcon+'" width="50px" alt="Social Button"> </a><a href="'+xLink+'" class="card-footer-item"> <img src="'+xIcon+'" width="50px" alt="Social Button"> </a><a href="'+instagramLink+'" class="card-footer-item"> <img src="'+instagramIcon+'" width="50px" alt="Social Button"> </a>'
    /*<a href="'+[REPLACE WITH SERVICE VAR]+'" class="card-footer-item"> <img src="'+[REPLACE WITH SERVICE ICON]+'" width="50px" alt="Social Button"> </a>*/



  /*Below line will be updated by admin staff to reflect profile creation/update time*/
  document.getElementById("profileTime").innerHTML = '5:22 PM - 15 Mar 2025'

}
