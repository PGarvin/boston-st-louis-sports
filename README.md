# boston-st-louis-sports
This shows the 10 times that St. Louis and Boston faced off for a championship in baseball, basketball, football, and hockey before 2019.

## How the code works
The JavaScript is scroll activated. Once the user has scrolled to the card about the 1946 World Series, the tally bar becomes visible and sticks to the top.

The tally grows as St. Louis and Boston win championships. Data attributes have been added to the HTML tags for each of the game cards. The JavaScript code checks to see which card is closet to the top, and then reads the data attribute for that card: the year of that championship, the cumulative number of Boston wins at that point in time, and the cumulative number of St. Louis wins at that point in time. The inner.HTML of the tally divs is replaced with those values upon scrolling.

Once the user has scrolled past the 2013 World Series — the final series before 2019 — the tally bar is hidden again and no longer sticking to the top.