import React from 'react';
import stations from '../images/stations.png';
import IL_corn_yield_estimates from '../images/IL_corn_yield_estimates.png';
import IL_corn_yield_19022022 from '../images/IL_corn_yield_19022022.png';
import IL_corn_yield_detrended from '../images/IL_corn_yield_detrended.png';
import ARMA_detrended from '../images/ARMA_detrended.png';
import sqrt_test from '../images/sqrt_test.png';
import sqrt_test_2 from '../images/sqrt_test_2.png';
import corn_en from '../images/corn_en.png';
import corn_CVMSE from '../images/corn_CVMSE.png';
import corn_lambda from '../images/corn_lambda.png';
import corn_en_3 from '../images/corn_en_3.png';
import corn_lambda_2 from '../images/corn_lambda_2.png';
import stations_en_1 from '../images/stations_en_1.png';
import corn_CVMSE_2 from '../images/corn_CVMSE_2.png';
import stations_en_2 from '../images/stations_en_2.png';

const Stat429FinalProject = () => {
    return (
        <div>
            <h1>Predicting Corn Yields with Weather Variables in Illinois</h1>

            <h3>Authors</h3>
            <p>
                Conor Nield<br />
                Henrique Monaco<br />
                Cheng Bi<br />
            </p>

            <h2>Abstract</h2>
            <p>
                Crop yields and prices have significant economic effects, and are historically difficult to predict. Weather is one variable that has an undeniable impact on yields. We use weather variables to predict corn yields in Illinois using an elastic net regression. We achieve a predictive power of 0.58 (r²) and found that average max and min temperatures in August and July, average min temperatures in September, and cumulative precipitation in July and September are important in predicting corn yields in Illinois. </p>


            <h2>Data</h2>
            <p>
                Our monthly weather data is from the Midwest Regional Climate Center.
                Our weather dataset includes monthly total precipitation, monthly average high temperature, 
                monthly average low temperature, and monthly average mean temperature for 1902 through 2022. 
                For weather observations with missing values, we use the mean values of one year before and 
                one year after in the same month to interpolate them. We drop weather stations with continuous 
                missing values across three years. Our final weather dataset includes 21 stations in Illinois 
                (see Fig. 1). We also attach the 2023 Illinois corn yield estimates from USDA (see Fig. 1). 
                Next, we plot the time series data: Illinois corn yield in Fig. 2.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={stations} alt="The 21 Selected Weather Stations" style={{ width: '300px', height: 'auto', margin: '10px' }} />
                <img src={IL_corn_yield_estimates} alt="2023 Illinois Corn Yield Estimates" style={{ width: '300px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 1: The 21 Selected Weather Stations Together with Illinois Corn Yield Estimates</p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={IL_corn_yield_19022022} alt="Illinois corn yield (1902-2022)" style={{ width: '525px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 2: Illinois corn yield (1902-2022)</p>

            <h2>Methods</h2>
            
            <p>
                Fig. 2 indicates that the yearly corn yield data has a clear time trend starting around 1940 and an increasing variance since then. We add a linear time trend starting from 1940 (also tried 1939 and 1938) by including a time break after 1940 (also tried 1939 and 1938). We tried both log transformation and square root transformation on corn yield to solve the increasing variance issue. The square root transformation with 1939 as the time break is the only measure that can pass both the Ljung-Box test and the studentized Breusch-Pagan test (Fig. 3).
                The detrended corn yield data is shown in Fig. 4, where no clear auto-correlation pattern is detected.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={sqrt_test} alt="Residual Test after Fitting a Linear Time Trend Model" style={{ width: '400px', height: 'auto', margin: '10px' }} />
                <img src={sqrt_test_2} alt="Residual Test after Fitting a Linear Time Trend Model (continued)" style={{ width: '400px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 3: Residual Test after Fitting a Linear Time Trend Model</p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={IL_corn_yield_detrended} alt="Visualization of the Detrended Corn Yield Data" style={{ width: '400px', height: 'auto', margin: '10px' }} />
                <img src={ARMA_detrended} alt="Auto-correlation Test for Corn Yield" style={{ width: '400px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 4: Visualization of the Detrended Corn Yield Data and Auto-correlation Test</p>

            <p>
                Besides the detrended and transformed dataset mentioned above, we adopt a similar approach to construct another dataset using corn yields after 1940 only. Given the fact that only limited weather variations exist within Illinois, we believe that the monthly weather data in the 21 selected weather stations can be highly correlated. We will fit an elastic net model to predict the Illinois corn yield.
            </p>
            
           
            <h2>Results</h2>

            <p>
                Our first model is an elastic model with Illinois corn yields from 1902 through 2022 as the dependent variable and monthly cumulative precipitation, monthly cumulative precipitation squared, monthly average max temperature, monthly average min temperature, and monthly average mean temperature at the 21 weather stations in the same time horizon as independent variables. We split the data into training (80%) and test (20%) sets to examine the prediction. The results of the elastic net are shown in Fig. 5 and Fig. 6. However, the R-squared is just 0.3721, which is not quite satisfying.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={corn_CVMSE} alt="The Results of the Elastic Model (1902-2022)" style={{ width: '200px', height: 'auto', margin: '10px' }} />
                <img src={corn_en} alt="The Results of the Elastic Model (1902-2022)" style={{ width: '400px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 5: The Results of the Elastic Model (1902-2022)</p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={corn_lambda} alt="The Results of the Elastic Model (1902-2022) Continued" style={{ width: '400px', height: 'auto', margin: '10px' }} />
                <img src={stations_en_1} alt="The Results of the Elastic Model (1902-2022)" style={{ width: '250px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 6: The Results of the Elastic Model (1902-2022) Continued</p>

            <p>
                We fit the same elastic model to the detrended and transformed dataset from 1940 through 2022. The results are shown in Fig. 7 and Fig. 8. We notice that the R-squared increases to 0.5809. Given the relationships between temperature, precipitation, and yield are complex and influenced by numerous other factors beyond the variables included in our model, we think the predictive power is pretty good.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={corn_CVMSE_2} alt="The Results of the Elastic Model (1940-2022)" style={{ width: '200px', height: 'auto', margin: '10px' }} />
                <img src={corn_en_3} alt="The Results of the Elastic Model (1940-2022)" style={{ width: '400px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 7: The Results of the Elastic Model (1940-2022)</p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={corn_lambda_2} alt="The Results of the Elastic Model (1940-2022)" style={{ width: '400px', height: 'auto', margin: '10px' }} />
                <img src={stations_en_2} alt="The Results of the Elastic Model (1940-2022)" style={{ width: '250px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 8: The Results of the Elastic Model (1940-2022) Continued</p>



            <h2>Discussion</h2>
            <p>
            Our elastic net model can explain 58% of variations in corn yields in Illinois from 1940 through 2022. Temperatures and precipitations in July, August, and September are shown to be the most important variables in predictions. One limitation lies in the selection of transformation on corn yields. The variations in corn yields is not monotonically increasing, which invalidates the log-transformation. We used square root transformation, which can pass the studentized Breusch-Pagan test but its performance is still not perfect.
            </p>

            

            <h2>References</h2>
            <ul>
                <li>Irwin, S. (2023). The Relative Impact of Crop Weather Variables on the U.S. Average Yield of Corn. <i>farmdoc daily</i>.</li>
            </ul>

        </div>
    );
};

export default Stat429FinalProject;
