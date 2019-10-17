# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
    A bunch of bpk-* libs for the components to save some time and keep some consistency, and moment.js for date/time math/formating because I don't trust my self to do it.
### Q) What is the command to start the server?
(Default) `APIKEY=<key> npm run server`

---

# General:

### Q) How long, in hours, did you spend on the test?
    Around 7-8 hours. I was trying not to spend more than a workday worth of work on this.
### Q) If you had more time, what further improvements or new features would you add?
    Aside from the obvious unimplemented stuff such as filters/sort, I would:
    - Incrementally return results back from the server as soon as they arrive + lazy loading when there a loads of results. There's no good feedback at the moment while the results are waiting to come in
    - Show the dates for the search query (I was tempted to put this in, but I felt like I was already deviating from the design a bit and didn't really want to spend more time that I needed to 😇). Related note: I've got no handling for when a leg crosses multiple days (e.g. the little +1/+2's)
    - Show flight segments either via a modal or by expanding the cards
    - Dealing with multiple price options
    - Give the server some more love - I feel like I've neglected it a bit compared to the frontend
    - Error handling + prevention - I haven't really covered off what-ifs and edge cases. The app as it stands won't fail gracefully if the server goes down or returns some bad data.
### Q) Which parts are you most proud of? And why?
    - I was really happy that I managed to reuse a lot of the pre-existing Backpack components and never had to introduce too many additional frontend libraries (although I did have some issues using the color mixins).
### Q) Which parts did you spend the most time with? What did you find most difficult?
    - I've never had to had to use proptypes before (it's always just been trusting Typescripts compile time type checking), so I spend a bit of time fumbling around with these. There's still some proptypes validation issues that are hanging around that I haven't fixed.
    - Lots of little things across multiple components (nothing in particular), like date/time handling and formatting things right
    - There wasn't anything difficult per se, just lots and lots of things that needed to be done
### Q) How did you find the test overall? If you have any suggestions on how we can improve the test or our API, we'd love to hear them.
It was overall pretty good, although a tad long for a first stage test. Maybe a suggestion to cut off some time would be to not have to do the Actions bar (filter/sort etc..) and the search summary. The interesting bit was displaying the itenaries in my opinion. The component libraries and the API test page were super useful though!