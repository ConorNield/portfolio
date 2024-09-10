import React from 'react';
import battingOrderDataFrame from "../images/battingOrderDataFrame.png"

const BattingOrderBlog = () => {
    return (
        <div>
            <h1>Batting Order Optimization in Baseball</h1>

            <p>In baseball, the batting order is the sequence in which 9 batters on a team take their turns to hit the ball. The order is decided by the team's manager before the game and generally remains the same throughout.</p>

            <p>Each position in the batting order has different characteristics associated with it. Here is a simplified version of each batter’s general characteristics:</p>

            <ul>
                <li><strong>Batter 1:</strong> Contact hitter, good batting average with a lower isolated power, and ideally your best base runner.</li>
                <li><strong>Batter 2:</strong> Best at moving the lead runner to second or third.</li>
                <li><strong>Batter 3:</strong> Best overall hitter.</li>
                <li><strong>Batter 4:</strong> Best power hitter.</li>
                <li><strong>Batter 5:</strong> Second best power hitter.</li>
                <li><strong>Batter 6:</strong> "Second lead-off hitter", good contact hitter.</li>
                <li><strong>Batters 7-9:</strong> Generally best to worst overall hitter with the pitcher batting in NL games (before 2022).</li>
            </ul>

            <p>This project has the goal of answering the following questions:</p>
            <ol>
                <li>How much does batting order influence the number of runs scored?</li>
                <li>Are MLB teams optimizing batting order in order to maximize runs scored?</li>
                <li>Is it possible to create a function that maximizes expected scored runs through batting order?</li>
            </ol>

            <h2 className="section-title">Data Creation</h2>

            <p>I created a data frame mapping out every batting order lineup used in the 2017-2019 regular seasons. Each row includes the total runs scored by the respective team in the first 9 innings, along with the following in-season stats for every batter in the lineup:</p>

            <ul>
                <li>On base percentage (OBP): The percentage of the time a batter gets on base (Total hits + total walks / plate appearances).</li>
                <li>Batting Average (AVG): The percentage of time a player gets a hit (Total hits / plate appearances).</li>
                <li>Steal Success Rate: Total steals / steal attempts.</li>
                <li>Steals per game: Total steals / games played.</li>
                <li>Slugging (SLG): Total singles + 2 * total doubles + 3 * total triples + 4 * total home runs.</li>
                <li>Isolated Power (ISO): Slugging - batting average.</li>
                <li>Home runs per game: Total home runs / games played.</li>
                <li>Whether a batter bats lefty or righty (bats).</li>
            </ul>

            <p>Some of these predictors paired together will have obvious multicollinearity problems. We will do our best to limit multicollinearity.</p>

            <img src = {battingOrderDataFrame} alt="data set" style={{width: '1000px', height: 'auto'}}/>

            <p>The data frame continues to include the rest of the data for the first batter and every batter after that. To create this data frame, I used statcast data, and Lahman “Batting” and “People” data sets.</p>

            <h2 className="section-title">Model Creation</h2>

            <h3>Individual Models</h3>

            <p>I made 6 individual models for each of the first 6 batters in the lineup. Initially, they were not linear, so I limited the number of predictors, implemented a square root transformation, and removed highly influential points to make the models linear.</p>

            <p>Here are the results:</p>

            <ul>
                <li><strong>Batter 1:</strong> A strong combination of speed, power, and high on-base skills, with a particular emphasis on base-stealing to set the stage for the rest of the lineup. Ideally best OBP, HR per game, and base running ability. Most critical member of the lineup.</li>
                <li><strong>Batter 2:</strong> A balanced hitter with a focus on power (SLG) and on-base percentage, providing both run-scoring and run-producing opportunities.</li>
                <li><strong>Batter 3:</strong> A consistent and reliable hitter with a high batting average and power, critical for driving in runs and maintaining momentum.</li>
                <li><strong>Batter 4:</strong> A powerful slugger with a strong focus on home runs to drive in runs and capitalize on scoring opportunities.</li>
                <li><strong>Batter 5:</strong> A versatile hitter who contributes with both power (HRs and SLG) and adaptability, continuing the momentum from the middle of the lineup.</li>
                <li><strong>Batter 6:</strong> A power hitter who excels in slugging percentage, providing the necessary strength to transition smoothly into the bottom of the order. Ideally the best slugging percentage.</li>
            </ul>

            <p>On base percentage matters for all of the batting positions.</p>

            <h3>Summary of the 6 Models:</h3>

            <pre>
    <code>
        Call: lm(formula = sqrt(total_runs) ~ OBP_batter1 + HR_per_game_batter1 + steals_per_game_batter1, data = cleaned_data)<br />
        Residuals:<br />
        Min      1Q  Median      3Q     Max <br />
        -2.2220 -0.4984  0.0520  0.5446  3.4564<br />
        Coefficients:
        Estimate Std. Error t value Pr(|t|)<br />
        (Intercept)           1.43295    0.05519  25.963  2e-16 ***<br />
        OBP_batter1           1.20436    0.17264   6.976  3.12e-12 ***<br />
        HR_per_game_batter1   0.63845    0.08018   7.962  1.76e-15 ***<br />
        steals_per_game_batter1 0.24743  0.06518   3.796  0.000148 ***<br />
        ---<br />
        Residual standard error: 0.8324 on 23749 degrees of freedom<br />
        Multiple R-squared:  0.007855, Adjusted R-squared:  0.00773<br />
        F-statistic: 62.68 on 3 and 23749 DF,  p-value: 2.2e-16 <br /> <br /> <br />

        Call:
lm(formula = sqrt(total_runs) ~ OBP_batter2 + SLG_batter2, data = cleaned_data) <br />

Residuals:<br />
    Min      1Q  Median      3Q     Max <br />
-2.1186 -0.5063  0.0530  0.5416  3.3419 <br />

Coefficients:
            Estimate Std. Error t value Pr(|t|)    <br />
(Intercept)  1.44927    0.04945  29.310   2e-16 ***<br />
OBP_batter2  0.78001    0.20010   3.898 9.72e-05 ***<br />
SLG_batter2  0.49266    0.09677   5.091 3.58e-07 ***<br />
---<br />

Residual standard error: 0.8334 on 23750 degrees of freedom<br />
Multiple R-squared:  0.005539,	Adjusted R-squared:  0.005455 <br />
F-statistic: 66.14 on 2 and 23750 DF,  p-value:  2.2e-16<br /> <br /> <br />


Call:
lm(formula = sqrt(total_runs) ~ OBP_batter3 + HR_per_game_batter3 + 
    AVG_batter3, data = cleaned_data) <br />

Residuals:<br />
    Min      1Q  Median      3Q     Max <br />
-2.1299 -0.5061  0.0520  0.5435  3.3644 <br />

Coefficients:
                    Estimate Std. Error t value Pr(|t|)    <br />
(Intercept)          1.44623    0.05282  27.381   2e-16 ***<br />
OBP_batter3          0.64891    0.22687   2.860  0.00424 ** <br />
HR_per_game_batter3  0.51458    0.08828   5.829 5.64e-09 ***<br />
AVG_batter3          0.65932    0.27365   2.409  0.01599 *  <br />
---<br />

Residual standard error: 0.8335 on 23749 degrees of freedom <br />
Multiple R-squared:  0.00532,	Adjusted R-squared:  0.005195 <br />
F-statistic: 42.34 on 3 and 23749 DF,  p-value:  2.2e-16 <br /> <br /> <br />


Call:
lm(formula = sqrt(total_runs) ~ OBP_batter4 + HR_per_game_batter4, 
    data = cleaned_data) <br />

Residuals:<br />
    Min      1Q  Median      3Q     Max <br />
-2.1601 -0.5030  0.0482  0.5441  3.3671 <br />

Coefficients:
                    Estimate Std. Error t value Pr(|t|)    <br />
(Intercept)          1.48513    0.05280  28.129   2e-16 ***<br />
OBP_batter4          1.03106    0.16364   6.301 3.02e-10 ***<br />
HR_per_game_batter4  0.63679    0.08222   7.745 9.91e-15 ***<br />
---<br />

Residual standard error: 0.8333 on 23750 degrees of freedom<br />
Multiple R-squared:  0.005728,	Adjusted R-squared:  0.005644 <br />
F-statistic: 68.41 on 2 and 23750 DF,  p-value:  2.2e-16<br /> <br /> <br />


Call:
lm(formula = sqrt(total_runs) ~ OBP_batter5 + HR_per_game_batter5 + 
    SLG_batter5, data = cleaned_data)<br />

Residuals:<br />
    Min      1Q  Median      3Q     Max <br />
-2.2415 -0.5040  0.0499  0.5428  3.3118 <br />

Coefficients:<br />
                    Estimate Std. Error t value Pr(|t|)  <br />  
(Intercept)          1.44683    0.05026  28.789   2e-16 ***<br />
OBP_batter5          0.83118    0.21996   3.779 0.000158 ***<br />
HR_per_game_batter5  0.45901    0.15508   2.960 0.003080 ** <br />
SLG_batter5          0.37225    0.17299   2.152 0.031423 *  <br />
---<br />

Residual standard error: 0.8326 on 23749 degrees of freedom <br />
Multiple R-squared:  0.00755,	Adjusted R-squared:  0.007424 <br />
F-statistic: 60.22 on 3 and 23749 DF,  p-value:  2.2e-16<br /> <br /> <br />


Call:
lm(formula = sqrt(total_runs) ~ OBP_batter6 + SLG_batter6, data = cleaned_data)<br />

Residuals:<br />
    Min      1Q  Median      3Q     Max <br />
-2.2293 -0.5100  0.0468  0.5409  3.3371 <br />

Coefficients:<br />
            Estimate Std. Error t value Pr(|t|)    <br />
(Intercept)  1.38130    0.04569  30.233   2e-16 ***<br />
OBP_batter6  0.79284    0.18420   4.304 1.68e-05 ***<br />
SLG_batter6  0.75262    0.09550   7.881 3.39e-15 ***<br />
---<br />

Residual standard error: 0.8322 on 23750 degrees of freedom<br />
Multiple R-squared:  0.00829,	Adjusted R-squared:  0.008206 <br />
F-statistic: 99.26 on 2 and 23750 DF,  p-value:  2.2e-16<br /> <br /> <br />

Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1 <br />

    </code>
</pre>


            <h3>Joint Model</h3>

            <p>The Joint Model includes OBP, HR per game, Steals per game, and slugging percentage for each of the first 6 batters.</p>

            <pre><code>
Call: 
lm(formula = sqrt(total_runs) ~ OBP_batter1 + steals_per_game_batter1 + SLG_batter1 + HR_per_game_batter1 <br />
+ OBP_batter2 + steals_per_game_batter2 + SLG_batter2 + HR_per_game_batter2 <br />
+ OBP_batter3 + steals_per_game_batter3 + SLG_batter3 + HR_per_game_batter3 <br />
+ OBP_batter4 + steals_per_game_batter4 + SLG_batter4 + HR_per_game_batter4 <br />
+ OBP_batter5 + steals_per_game_batter5 + SLG_batter5 + HR_per_game_batter5 <br />
+ OBP_batter6 + steals_per_game_batter6 + SLG_batter6 + HR_per_game_batter6, data = cleaned_data) <br />

Residuals: <br />
    Min      1Q  Median      3Q     Max <br />
-2.3617 -0.4912  0.0371  0.5467  3.4156 <br />

Coefficients: 
                     Estimate Std. Error t value Pr(|t|)    <br />
(Intercept)           0.29108    0.10432   2.790  0.00527 ** <br />
OBP_batter1           0.96268    0.23361   4.121  3.79e-05 *** <br />
steals_per_game_batter1 0.14213  0.06687   2.125  0.03357 *  <br />
SLG_batter1          -0.22467    0.19330  -1.162  0.24512    <br />
HR_per_game_batter1   0.54453    0.16923   3.218  0.00129 ** <br />
OBP_batter2           0.51534    0.22655   2.275  0.02293 *  <br />
steals_per_game_batter2 -0.04251  0.08421  -0.505  0.61369<br />
SLG_batter2           0.39261    0.20811   1.887  0.05924 .  <br />
HR_per_game_batter2  -0.07235    0.17249  -0.419  0.67488    <br />
OBP_batter3           0.34096    0.23114   1.475  0.14019    <br />
steals_per_game_batter3 -0.04440  0.10713  -0.414  0.67853    <br />
SLG_batter3           0.19567    0.21372   0.916  0.35990    <br />
HR_per_game_batter3   0.09449    0.18209   0.519  0.60380    <br />
OBP_batter4           0.61812    0.23330   2.649  0.00807 ** <br />
steals_per_game_batter4 -0.11117  0.15309  -0.726  0.46776    <br />
SLG_batter4          -0.19218    0.20126  -0.955  0.33964    <br />
HR_per_game_batter4   0.41335    0.16568   2.495  0.01261 *  <br />
OBP_batter5           0.49069    0.22313   2.199  0.02788 *  <br />
steals_per_game_batter5 -0.01697  0.13250  -0.128  0.89810    <br />
SLG_batter5           0.06717    0.17799   0.377  0.70589    <br />
HR_per_game_batter5   0.39872    0.15794   2.525  0.01159 *  <br />
OBP_batter6           0.62852    0.21709   2.895  0.00379 ** <br />
steals_per_game_batter6 -0.04106  0.12202  -0.336  0.73651    <br />
SLG_batter6           0.33252    0.17217   1.931  0.05344 .  <br />
HR_per_game_batter6   0.16631    0.16225   1.025  0.30538    <br />
---<br />
Signif. codes:  0 ‘***’ 0.001 ‘**’ 0.01 ‘*’ 0.05 ‘.’ 0.1 ‘ ’ 1 <br />

Residual standard error: 0.8269 on 23577 degrees of freedom <br />
Multiple R-squared:  0.0228,	Adjusted R-squared:  0.02181 <br />
F-statistic: 22.92 on 24 and 23577 DF,  p-value: 2.2e-16 <br />
            </code></pre>

            <p>
                As you can see not all variables are correlated on a signficant level for every batting position. <br/>
                So although this model will not perfectly predict runs per game, it can still give valuable insight.
            </p>

            

            <h2 className="section-title">Build Model to Optimize Batting Order</h2>

            <p>Using the Joint Model, I created an R Shiny app that predicts total runs, finds the optimal batting order for the 6 players entered, and provides the predicted total runs based on the optimal batting order.</p>

            <p>The app finds the optimal batting order by cycling through every possible batting order of the first 6 batters. The app cycles through 720 possible instances (6! instances). Including all 9 batters would result in 362,880 instances, which is too large for my computer to process.</p>
            
            <p> Below is the R shiny app:</p>

            <iframe
                src="https://51ul7f-conor-nield.shinyapps.io/rshiny/" 
                width="500px"
                height="800px" 
                allowFullScreen
                title="Batting Order Optimization Shiny App"
            ></iframe>
            
            <h2 className="section-title">Conclusion</h2>

            <p>This model serves as a simplified version of a formula that optimizes batting order for the first 6 batters. It is a major oversimplification of the factors that go into choosing a batting order. The model only includes 4 stats for the first 6 batters. In reality, each MLB team's staff considers more factors (other stats, the opposing team, recent performance, interactions between stats, etc.). This model could potentially be expanded into a more complex model that includes all 9 batters and more predictor variables.</p>

            <h2 className="section-title">Sources</h2>

            <ul>
                <li>
                    <a href="https://baseballsavant.mlb.com/csv-docs" target="_blank" rel="noopener noreferrer">
                        Statcast Data - Baseball Savant
                    </a>
                </li>
                <li>
                    <a href="http://seanlahman.com/" target="_blank" rel="noopener noreferrer">
                        Lahman Batting and People Data - Sean Lahman
                    </a>
                </li>
            </ul>

        </div>
    );
};

export default BattingOrderBlog;

