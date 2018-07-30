import { Entry } from './entry';
import './styles.css';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var entryTitle = $('#entryTitle').val();
    console.log(entryTitle);
    var entryBody = $('#entryBody').val();
    console.log(entryBody);

    var newEntry = new Entry(entryTitle, entryBody);
    console.log(newEntry);
    $('#solution').append("<li>" + newEntry.title + "</li>");
    $('#solution').append("<p>" + newEntry.wordNumber() + "</p>");
    $('#solution').append("<li>" + "Number of vowels" + newEntry.vowels() + "</li>");
    $('#solution').append("<li>" + "Number of consonants" + newEntry.consonants() + "</li>");

  });
});
