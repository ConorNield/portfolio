import React from "react";
import Lottery_table from "../images/Lottery_table.png"
import Lottery_table2 from "../images/Lottery_table2.png"
const Lottery = () => {
    return (
        <div>
            <h1> NBA Draft Lottery</h1>
            <h3>Author</h3>
            <p>
                Conor Nield<br />
            </p>
            <h2> Introudction</h2>
            <p> 
            The NBA Draft Lottery is a complex system the NBA uses to create a sense of randomness in the determination of draft order. The NBA has an interest in having the lower performing teams draft first in order to even out the playing field of the NBA, and making the league more competitive. However, this can cause teams to lose on purpose in order to obtain better draft picks. The draft lottery was introduced to prevent this. It has the purpose of letting lower performing teams better draft picks, while discouraging franchises from tanking.
            </p>
            <p>
            I want to map out the history of the NBA draft lottery by creating a data frame of every lottery result with a quantified version of luck included. 
            </p>
            <h2>
                History of the NBA Draft Lottery
            </h2>
            <p>
            The NBA draft lottery has changed a lot throughout the years. To calculate the odds correctly, we must correctly map out these changes:
            </p>
            <p>
            1985: The lottery is first introduced with all 7 non playoff teams drawn at a random order. Ranking of teams record is not considered <br />
            1987: Only the first three picks were determined by the lottery, picks 4 through 7 were the reverse standing order of the teams that did not win a lottery pick<br />
            1989: The NBA expands to 25 teams, making 9 non playoff/ lottery teams <br />
            1990: The NBA expands to 27 teams, making 11 non playoff/ lottery teams. The NBA also introduced a weighted lottery system, The worst non-playoff team that season would have 11 chances, out of 66, to obtain the first pick. The second worst would have 10 chances, and so on. Like the previous system, only the first three picks were determined using the lottery. <br />
            1994: The NBA modified the lottery system to give the team with the worst record a larger chance of winning, this new system involves drawing 4 ping pong balls numbered 1-14 (the order of the numbers does not matter). Before the draw, the NBA assigns 1,000 possible combinations to the non-playoff teams, with teams that have worse records receiving more combinations. 
            If the combination 11-12-13-14 is drawn, or a combination belonging to a previously drawn team, it is ignored and redrawn. This process is used to determine the first three picks in the draft. <br />
            1995: The NBA expands to 29, making 13 non playoff teams. However, the newly formed Vancouver Grizzlies and Toronto Raptors were automatically given the 6th and 7th overall picks and did not participate in the lottery. <br />
            1996-1998: The Grizzlies and Raptors participated in each of the NBA lotteries but were ineligible for the first overall pick. <br />
            2004: The NBA expanded to 30, making 14 non playoff teams. However, the newly formed Charlotte Bobcats were automatically given the fourth pick and did not participate in the lottery. <br />
            2019: The lottery format changed to have 4 lottery picks instead of 3. Odds were also flattened with the three teams with the worst record receiving 14 percent of the combinations each. <br />
            </p>

            <h2>Steps</h2>
            <p>
            1. Create a data frame of every nba draft lottery selection that includes the year, team, pre lottery rank, pick received, and the total number of combinations <br />
            2. From this data frame, quantify how lucky each draft pick was <br />
            3. Analyze what are the luckiest picks in NBA draft lottery history, and what teams have been the luckiest historically <br />

            </p>
            <h2>Data</h2>

            <p>
            I created a data frame of every NBA draft lottery result. The following columns include: <br />
            1. Name of NBA team at the time of the lottery (Team) <br />
2. Year <br />
3. Rank (pre lottery ranking of teams, team with the worst record is 1, etc) <br />
4. Result (result of the lottery) <br />
5. Combinations (number of number combinations given to each team) <br />
6. For the 1985-1989 NBA draft lotteries, I set the number of combinations equal to each team: 1985-1988 each team has 142.857 combinations; 1989 each team has 111.111 combinations <br />
7. For the 1990 - 1993 NBA draft lotteries, I set the number of combinations as the (number of chances for each team / 66) * 1000 <br /> <br />
Note on the team abbreviations: <br />
I decided to focus on mapping out each franchise, rather than a specific team title. Most team abbreviations are self explanatory, however since teams have moved cities, and changed names some clarification is needed. <br />

BKN: Represents the Nets, Brooklyn and New Jersey <br />
MEM/VAN: Represents the Grizzlies, Memphis or Vancouver <br />
OKC/SEA: Represents the Oklahoma City Thunder and the Seattle Supersonics (switched in 2008) <br />
Now the confusing one: <br />
NOP/CHA: Represents the Charlotte Hornets (from 1988 to 2002) and the New Orleans Hornets/Pelicans <br />
CHA: Represents the Charlotte Bobcats and Charlotte Hornets (2015 to present).  <br />
The two Charlotte Hornets teams are separate franchises so they are distinguished separately. <br /> <br />

Note on 1995 and 2004 drafts: <br />
Since the newly formed teams were just given picks, and did not participate in the lottery, I decided to just remove them completely from the data. For example, in 2004, the Washington Wizards received the 5th overall pick and the Bobcats were given the fourth; however, in the data I ignore the Bobcats and list the Wizards as receiving the fourth pick. <br />
I will account for the abnormality of the 1996-1998 drafts in the data calculation. 

            </p>

            <h2>
                Luck Calculation
            </h2>

            <p>I decided that I was going to quantify luck by calculating the expected draft position of each NBA team pre lottery (Expected_Value), and the standard deviation(Standard_deviation). I will then calculate luck through the formula:
 (Expected_Value - Result)/ Standard_deviation <br />


Here is the code in python I used to calculate the luck of each NBA draft lottery result:
</p>
<pre>
                <code>
                    {`
import pandas as pd
import math

df5 = pd.read_csv("NBA_Lottery_2.csv")

def calculate_values(year, Rank, combinations, result, team, df5):
  #Sparse each year based on the number of lottery picks and number of lottery teams
    if year >= 2019: 
        picks = 4
    elif year >= 1987: 
        picks = 3
    else:
      #All teams from the 1985 and 1986 draft have the same expected value and lottery chance.
      return pd.Series([4, 1.0, 4 - result, 2, (4-result)/2])
    
    
    if year == 1989:
        teams = 9
    elif year <= 1988:
        teams = 7
    elif year <= 1995:
        teams = 11
    elif year <= 2003:
        teams = 13
    else:
        teams = 14
    #chance of lottery pick
    lc = 0
    #expected pick position
    ev = 0
    var = 0
    sd = 0
    #Values below will come into play for post lottery odds
    move_back_0 = 0
    move_back_1 = 0
    move_back_2 = 0
    move_back_3 = 0
    move_back_4 = 0
    A = 0
    B = 0
    C = 0
    D = 0
    z = 0
    
    #Calculating pick 1 probability
    #The 1996 - 1998 draft the Toronto Raptors and Vancouver Grizzlies were ineligible for the first pick. 

    if (year > 1995 and year < 1999):
      if (team == 'TOR' or team == 'VAN'):
        prob_first = 0
      elif (year == 1996):
        prob_first = combinations/ (1000 - 407)
      elif (year == 1997):
        prob_first = combinations / (1000 - 273)
      elif (year == 1998):
        prob_first = combinations/ (1000 - 304)
    else:
      prob_first = combinations / 1000
    ev += prob_first
    lc += prob_first
    
    # For the second pick
    # Below I calculated the average number of combinations left after the first pick
    
    if (year > 1995 and year < 1999):
      other_teams_after_first = df5[(df5["Year"] == year) & (df5["Rank"] != Rank) & (df5["Team"] != 'TOR') & (df5["Team"] != 'VAN')]
    else:
      other_teams_after_first = df5[(df5["Year"] == year) & (df5["Rank"] != Rank)]
    other_teams_after_first_2 = df5[(df5["Year"] == year) & (df5["Rank"] != Rank)]
    
    
    avg_comb_left_after_first = 1000 - sum((other_teams_after_first["Combinations"]**2) / (1000 - combinations))
    prob_second = (combinations / avg_comb_left_after_first) * (1-prob_first)
    ev += 2 * prob_second
    lc += prob_second
    
    # For the third pick
    prob_third = 0
    combo_removed = 0
    for _, row_j in other_teams_after_first.iterrows():
      combo_j = row_j["Combinations"]
      Rank_j = row_j["Rank"]
      other_teams_after_j = other_teams_after_first_2[other_teams_after_first_2["Rank"] != Rank_j]
      p_j = combo_j / (1000 - combinations)
      for _, row_k in other_teams_after_j.iterrows():
        combo_k = row_k["Combinations"]
        p_k_given_j = combo_k / (1000 - combo_j - combinations)
        combo_removed += p_j * p_k_given_j * (combo_j + combo_k)
    avg_comb_after_second = 1000 - combo_removed
    prob_third += (combinations / (1000 - combo_removed)) * (1 - prob_second - prob_first)
    ev += 3 * prob_third
    lc += prob_third

    
    # For the fourth pick, if applicable
    prob_fourth = 0
    combo_removed_third = 0
    if (picks == 4):
      for _, row_j in other_teams_after_first.iterrows():
        combo_j = row_j["Combinations"]
        Rank_j = row_j["Rank"]
        other_teams_after_j = other_teams_after_first_2[other_teams_after_first_2["Rank"] != Rank_j]
        p_j = combo_j / (1000 - combinations)

        for _, row_k in other_teams_after_j.iterrows():
          combo_k = row_k["Combinations"]
          Rank_k = row_k["Rank"]
          p_k_given_j = combo_k / (1000 - combo_j - combinations)
          other_teams_after_k = other_teams_after_j[other_teams_after_j["Rank"] != Rank_k]

          for _, row_l in other_teams_after_k.iterrows():
            combo_l = row_l["Combinations"]
            p_l_given_j_k = combo_l / (1000 - combo_j - combo_k - combinations)
            combo_removed_third += p_j * p_k_given_j * p_l_given_j_k * (combo_j + combo_k + combo_l)
      avg_comb_after_third = 1000 - combo_removed_third
      prob_fourth += (combinations / (1000 - combo_removed_third)) * (1 - prob_second - prob_first - prob_third)
      ev += 4 * prob_fourth
      lc += prob_fourth

      
    #Post lottery odds
    #These odds are calculated by cycling through every possible lottery combination, given that the chosen team (I) does not recieve a lottery pick.
    #The code below cycles through each other team in the same years lottery. This results in teams A, B, C, (and D if year is after 2019). 
    #The values A through D represent if each team cycled is a lower or higher rank than team I. 
    #If all the teams have a lower rank than team I, team I's result is equal to rank and that resulting instance is added to move_back_0. 
    #By the end of the cycle, move_back_0 is the odds of team I not recieving a lottery pick and all teams recieving lottery picks having a lower rank than team I. 
    #The same is done for the other move_back values.



    for _, row_m in other_teams_after_first.iterrows():
      combo_m = row_m["Combinations"]
      Rank_m = row_m["Rank"]
      p_m = combo_m/(1000 - combinations)
      if (Rank_m < Rank):
        A = 1
      else:
        A = 0
      other_teams_after_m = other_teams_after_first_2[other_teams_after_first_2["Rank"] != Rank_m]
      other_teams_after_first = df5[(df5["Year"] == year) & (df5["Rank"] != Rank)]
      for _, row_n in other_teams_after_m.iterrows():
        combo_n = row_n["Combinations"]
        Rank_n = row_n["Rank"]
        p_n_given_m = combo_n / (1000 - combo_m - combinations)
        other_teams_after_n = other_teams_after_m[other_teams_after_m["Rank"] != Rank_n]
        if (Rank_n < Rank):
          B = 1
        else:
          B = 0

        for _, row_o in other_teams_after_n.iterrows():
          combo_o = row_o["Combinations"]
          Rank_o = row_o["Rank"]
          p_o_given_m_n = combo_o / (1000 - combo_n - combo_m - combinations)
          if (Rank_o < Rank):
            C = 1
          else:
            C = 0
          other_teams_after_o = other_teams_after_n[other_teams_after_n["Rank"] != Rank_o]
          if (picks == 4):
            for _, row_p in other_teams_after_o.iterrows():
              combo_p = row_p["Combinations"]
              Rank_p = row_p["Rank"]
              p_p_given_m_n_o = combo_p / (1000 - combo_m - combo_n - combo_o - combinations)
              if (Rank_p < Rank):
                D = 1
              else:
                D = 0
              if ((A + B + C + D) == 0):
                move_back_4 += (p_m * p_n_given_m * p_o_given_m_n * p_p_given_m_n_o * (1 - lc))
              elif ((A + B + C + D) == 1):
                move_back_3 += (p_m * p_n_given_m * p_o_given_m_n * p_p_given_m_n_o * (1 - lc))
              elif ((A + B + C + D) == 2):
                move_back_2 += (p_m * p_n_given_m * p_o_given_m_n * p_p_given_m_n_o * (1 - lc))
              elif ((A + B + C + D) == 3):
                move_back_1 += (p_m * p_n_given_m * p_o_given_m_n * p_p_given_m_n_o * (1 - lc))
              elif ((A + B + C + D) == 4):
                move_back_0 += (p_m * p_n_given_m * p_o_given_m_n * p_p_given_m_n_o * (1 - lc))
          else:
            if ((A + B + C + D) == 0):
              move_back_3 += (p_m * p_n_given_m * p_o_given_m_n * (1 - lc))
            elif ((A + B + C + D) == 1):
              move_back_2 += (p_m * p_n_given_m * p_o_given_m_n * (1 - lc))
            elif ((A + B + C + D) == 2):
              move_back_1 += (p_m * p_n_given_m * p_o_given_m_n * (1 - lc))
            elif ((A + B + C + D) == 3):
              move_back_0 += (p_m * p_n_given_m * p_o_given_m_n * (1 - lc))
              

    #Below I added the move back values to the expected value, calculated the variance, and standard deviation. 
    #I then used those values to calculate luck (z)
            
    if (picks == 4):
      ev += move_back_0 * Rank + move_back_1 * (Rank + 1) + move_back_2 * (Rank + 2) + move_back_3 * (Rank + 3) + move_back_4 * (Rank + 4)
      var = ((1 - ev)**2 * prob_first) + ((2 - ev)**2 * prob_second) + ((3 - ev)**2 * prob_third) + ((4 - ev)**2 * prob_fourth) + ((Rank - ev)**2 * move_back_0) + 
            (((Rank + 1) - ev)**2 * move_back_1) + (((Rank + 2) - ev)**2 * move_back_2) + (((Rank + 3) - ev)**2 * move_back_3) + (((Rank + 4) - ev)**2 * move_back_4)
      sd = math.sqrt(var)
      z = (ev - result) / sd

    else:
      ev += move_back_0 * Rank + move_back_1 * (Rank + 1) + move_back_2 * (Rank + 2) + move_back_3 * (Rank + 3)
      var = ((1 - ev)**2 * prob_first) + ((2 - ev)**2 * prob_second) + ((3 - ev)**2 * prob_third) + ((4 - ev)**2 * prob_fourth) + ((Rank - ev)**2 * move_back_0) + 
            (((Rank + 1) - ev)**2 * move_back_1) + (((Rank + 2) - ev)**2 * move_back_2) + (((Rank + 3) - ev)**2 * move_back_3)
      sd = math.sqrt(var)
      z = (ev - result) / sd
      
    return pd.Series([ev, lc, ev - result, sd, z])
df5[["Expected_Value", "Lottery_Chance", "Difference", "Standard_deviation", "Z"]] = df5.apply(lambda x: calculate_values(x['Year'], x['Rank'], 
        x['Combinations'], x['Result'], x['Team'], df5), axis=1)
                    `}
                </code>
            </pre>

            <p>This Python code outputs the following data frame:</p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Lottery_table} alt="Data frame" style={{ width: '600px', height: 'auto', margin: '10px' }} />
                <img src={Lottery_table2} alt="Datanfraje)" style={{ width: '600px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>This continues to include every draft lottery result</p>

            <h2>Ten Luckiest Picks</h2>

            <table border="2">
                <thead>
                    <tr>
                        <th style={{width: '250px'}}>Team</th>
                        <th style={{width: '100px'}}>Year</th>
                        <th style={{width: '250px'}}>Outcome</th>
                        <th style={{width: '100px'}}>Rank</th>
                        <th style={{width: '100px'}}>Pick Number</th>
                        <th style={{width: '100px'}}>Combinations</th>
                        <th style={{width: '100px'}}>Expected Pick Number</th>
                        <th style={{width: '100px'}}>Luck Level (Z)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlotte Hornets</td>
                        <td>1999</td>
                        <td>Drafted Barron Davis</td>
                        <td>13</td>
                        <td>3</td>
                        <td>5</td>
                        <td>12.710</td>
                        <td>6.673</td>
                    </tr>
                    <tr>
                        <td>Orlando Magic</td>
                        <td>1993</td>
                        <td>Traded for Penny Hardaway</td>
                        <td>11</td>
                        <td>1</td>
                        <td>15.152</td>
                        <td>10.543</td>
                        <td>4.831</td>
                    </tr>
                    <tr>
                        <td>Chicago Bulls</td>
                        <td>2008</td>
                        <td>Drafted Derrick Rose</td>
                        <td>9</td>
                        <td>1</td>
                        <td>17</td>
                        <td>8.713</td>
                        <td>4.481</td>
                    </tr>
                    <tr>
                        <td>Cleveland Cavaliers</td>
                        <td>2014</td>
                        <td>Traded for Kevin Love</td>
                        <td>9</td>
                        <td>1</td>
                        <td>17</td>
                        <td>8.713</td>
                        <td>4.479</td>
                    </tr>
                    <tr>
                        <td>Cleveland Cavaliers</td>
                        <td>2011</td>
                        <td>Drafted Kyrie Irving</td>
                        <td>8</td>
                        <td>1</td>
                        <td>28</td>
                        <td>7.603</td>
                        <td>3.513</td>
                    </tr>
                    <tr>
                        <td>Atlanta Hawks</td>
                        <td>2024</td>
                        <td>Drafted Zaccharie Risacher</td>
                        <td>10</td>
                        <td>1</td>
                        <td>30</td>
                        <td>9.192</td>
                        <td>3.033</td>
                    </tr>
                    <tr>
                        <td>Seattle Supersonics</td>
                        <td>1990</td>
                        <td>Drafted Gary Payton</td>
                        <td>10</td>
                        <td>2</td>
                        <td>30.303</td>
                        <td>9.249</td>
                        <td>2.986</td>
                    </tr>
                    <tr>
                        <td>Los Angeles Clippers</td>
                        <td>2001</td>
                        <td>Traded for Elton Brand</td>
                        <td>8</td>
                        <td>2</td>
                        <td>29</td>
                        <td>7.557</td>
                        <td>2.931</td>
                    </tr>
                    <tr>
                        <td>New Jersey Nets</td>
                        <td>2000</td>
                        <td>Drafted Kenyon Martin</td>
                        <td>7</td>
                        <td>1</td>
                        <td>44</td>
                        <td>6.553</td>
                        <td>2.841</td>
                    </tr>
                    <tr>
                        <td>Portland Trail Blazers</td>
                        <td>2007</td>
                        <td>Drafted Greg Oden</td>
                        <td>7</td>
                        <td>1</td>
                        <td>53</td>
                        <td>6.370</td>
                        <td>2.560</td>
                    </tr>
                </tbody>
            </table>

            <h3>Personal Thoughts on Luckiest Picks</h3>

            <p>The most interesting thing I see is how the Cavaliers had two of the 5 luckiest picks three years apart. This led to them receiving Kyrie Irving, and Kevin Love; the second and third best players on the 2016 NBA Championship Cavaliers team. <br />

Two of these picks led to finals appearances (Orlando/Hardaway: 1995, and Seattle/Payton: 1996) <br />
Derrick Rose, the youngest MVP winner, also had a franchise level impact on the Bulls before his injury. <br />

The rest of these picks did not have a major franchise level impact or happened too soon to be analyzed (Atlanta/ Risacher)
</p>

            <h2>Teams Ranked on Luck</h2>

            <p>Here is a table of every team ranked by average luck level:</p>

            <table border="2">
        <thead>
          <tr>
            <th style={{width: '400px'}}>Team</th>
            <th style={{width: '200px'}}>Average Luck per Lottery</th>
            <th style={{width: '200px'}}>Total Luck</th>
            <th style={{width: '200px'}}>Lottery Instances</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Los Angeles Lakers</td>
            <td>0.610809</td>
            <td>4.275662</td>
            <td>7</td>
          </tr>
          <tr>
            <td>Philadelphia 76ers</td>
            <td>0.489752</td>
            <td>9.795037</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Charlotte Hornets/New Orleans Pelicans</td>
            <td>0.439850</td>
            <td>8.797005</td>
            <td>20</td>
          </tr>
          <tr>
            <td>San Antonio Spurs</td>
            <td>0.439684</td>
            <td>3.957153</td>
            <td>9</td>
          </tr>
          <tr>
            <td>Houston Rockets</td>
            <td>0.355852</td>
            <td>4.270222</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Brooklyn Nets</td>
            <td>0.255792</td>
            <td>3.069503</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Cleveland Cavaliers</td>
            <td>0.214227</td>
            <td>4.284537</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Chicago Bulls</td>
            <td>0.213326</td>
            <td>3.199891</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Los Angeles Clippers</td>
            <td>0.157306</td>
            <td>3.773334</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Orlando Magic</td>
            <td>0.147733</td>
            <td>3.545600</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Seattle Supersonics/Oklahoma City Thunder</td>
            <td>0.136989</td>
            <td>2.328809</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Indiana Pacers</td>
            <td>-0.006617</td>
            <td>-0.079406</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Toronto Raptors</td>
            <td>-0.039078</td>
            <td>-0.625250</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Atlanta Hawks</td>
            <td>-0.081353</td>
            <td>-1.382995</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Utah Jazz</td>
            <td>-0.100911</td>
            <td>-1.210933</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Vancouver Grizzlies/Memphis Grizzlies</td>
            <td>-0.106546</td>
            <td>-1.491647</td>
            <td>14</td>
          </tr>
          <tr>
            <td>Portland Trail Blazers</td>
            <td>-0.107017</td>
            <td>-1.284209</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Charlotte Hornets</td>
            <td>-0.126488</td>
            <td>-2.403270</td>
            <td>19</td>
          </tr>
          <tr>
            <td>Milwaukee Bucks</td>
            <td>-0.156277</td>
            <td>-2.500434</td>
            <td>16</td>
          </tr>
          <tr>
            <td>Boston Celtics</td>
            <td>-0.203989</td>
            <td>-3.059835</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Washington Wizards</td>
            <td>-0.225745</td>
            <td>-5.192125</td>
            <td>23</td>
          </tr>
          <tr>
            <td>Minnesota Timberwolves</td>
            <td>-0.236083</td>
            <td>-5.193832</td>
            <td>22</td>
          </tr>
          <tr>
            <td>Detroit Pistons</td>
            <td>-0.236340</td>
            <td>-4.017781</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Phoenix Suns</td>
            <td>-0.251106</td>
            <td>-4.519907</td>
            <td>18</td>
          </tr>
          <tr>
            <td>Golden State Warriors</td>
            <td>-0.251245</td>
            <td>-6.029883</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Sacramento Kings</td>
            <td>-0.291810</td>
            <td>-8.176091</td>
            <td>28</td>
          </tr>
          <tr>
            <td>Miami Heat</td>
            <td>-0.296531</td>
            <td>-3.261842</td>
            <td>11</td>
          </tr>
          <tr>
            <td>New York Knicks</td>
            <td>-0.296559</td>
            <td>-4.151819</td>
            <td>14</td>
          </tr>
          <tr>
            <td>Denver Nuggets</td>
            <td>-0.429425</td>
            <td>-6.011956</td>
            <td>14</td>
          </tr>
          <tr>
            <td>Dallas Mavericks</td>
            <td>-0.472996</td>
            <td>-7.567942</td>
            <td>16</td>
          </tr>
        </tbody>
      </table>

      <h2>Concluding Thoughts</h2>

      <p>
        Although the Lakers (probably the best performing overall team from 1985 to 2024), are at the top of the list, I don't see much consistency with level of success <br />
        Other succesfull teams like the Golden State Warriors, and the Miami Heat are towards the bottom. While low performing teams like the Pelicans, and the Nets are towards the top. <br />
        Through linear modeling, lottery luck cannot predict future success at a significant level even if there are specific instances when it had an impact. <br />
        A succesfull NBA season is hinged on so many other factors, that lottery luck becomes an obsolete one. <br />


      </p>

      



        </div>
    )
}

export default Lottery