function deleteTournament (event) {
  event.preventDefault()

  var tournamentId= $(this).attr("value")

  console.log(tournamentId)
  var $form = $('[data-hook~=tourney-form]')
  var $formAlerts = $('[data-hook~=form-alerts]')

  var request = $.ajax({
      url: '/api/tournaments',
      type: 'DELETE',
      data: {id: tournamentId},
    });




  request.fail(showError)
  request.done(respondDeleteTourney)

  function showError (error) {
    console.error('Error removing new tournament.', '\n' + error.responseText)
    var message = 'There was a problem adding the tournament.'
    $formAlerts.prepend(buildErrorHtml(message))
  }

  function respondDeleteTourney (tourney) {
    var message
    // console.log(tourney);
    // console.log(request.status)
    // if (!tourney.id) {
    //   message = 'Your API didn\'t return a tournament id!'
    //   $formAlerts.prepend(buildErrorHtml(message))
    // }

  // The exercise had a 201 in the code below. That was causing it to fail and so I had to change it to a 200.
  // A 201 is the status when the response is ok and something was created on the server.
  // figure out how you can get it to respong with 201 since a server
    // 
    // if (request.status !== 200) {
    //   message = 'Your API didn\'t send a 201 status code!'
    //   $formAlerts.prepend(buildErrorHtml(message))
    // }
    //
    // if (message) {
    //   return
    // }

    console.log("in respondDeleteTourney")

    removeTourney(tourney)
  }



function removeTourney (tourney) {
  // var $tourneyList = $('[data-hook~=tourney-list]')

  console.log(tourney.id)

  $('[value~='+ tourney.id +']').parent().remove()


}

}
