import React from 'react';
import Soybeans_prices_ts from '../images/Soybeans_prices_ts.png';
import Soybean_returns from '../images/Soybean_returns.png';
import hist_sb_ret from '../images/hist_sb_ret.png';
import SB_rolling_vol from '../images/SB_rolling_vol.png';
import SB_rol_vol_ACF from '../images/SB_rol_vol_ACF.png';
import Garch_AIC from '../images/Garch_AIC.png';
import Garch_BIC from '../images/Garch_BIC.png';
import Garch_parameters from '../images/Garch_parameters.png';
import Ljung_Box_Garch from '../images/Ljung_Box_Garch.png';
import Garch_residuals from '../images/Garch_residuals.png';
import Garch_forecast from '../images/Garch_forecast.png';

const SoybeanGARCH = () => {
    return (
        <div>

            <h1>Predicting Soybean Returns with GARCH Model</h1>

            <h3>Authors</h3>
            <p>
                Conor Nield<br />
                Henrique Monaco<br />
                Cheng Bi<br />
            </p>

            <h2>Abstract</h2>
            <p>
                We deploy a GARCH model to forecast national soybean prices. We calculated the returns data, from monthly soybean prices from the National Agricultural Statistics Service (NASS), by taking the log transformation of this data, and differencing the series. We found a strong autoregressive conditional heteroscedasticity (ARCH) effect. We analyzed 24 possible generalized autoregressive conditional heteroscedasticity (GARCH) models through their respective AIC, BIC, and output methods and found that the 1,0,1,1 exponential GARCH with student t-distribution was the best model. From forecasting this model, we find that the model effectively captures general trends and periodic fluctuations in Soybean return rates, although it does tend to underestimate extreme volatility events, especially negative ones.
            </p>

            <h2>Introduction</h2>
            <p>
                Modelling commodity prices has its challenges. Despite its correlation with other variables (weather, currency, etc.), we can assume that all this information is part of previous prices. Thus, we can develop a model based on past prices to forecast (or try to) commodity prices. However, the assumption that variance is constant may not hold; errors might be auto-correlated, not normally distributed, and variance might be dynamic heteroskedasticity (Ramirez et al., 2003). Thus, in this section, we used a generalized auto-regressive conditional heteroskedasticity (GARCH) process to predict Soybean price (returns).
            </p>

            <h2>Data</h2>
            <p>
                We utilize Soybean monthly national prices from the National Agricultural Statistics Service 
                (NASS) from January-1950 to March-2024. Fig. 1 depicts the time series.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Soybeans_prices_ts} alt="National Soybean Price (1950-2024)" style={{ width: '500px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 1: National Soybean Price ($/bushel) (1950-2024)</p>

            <h2>Methods</h2>
        
            <p>
                We started by calculating returns. We first did a log transformation, then differenced the series. We also looked at the histogram of the returns, to understand its distribution. This creates our monthly returns time series, which seems to be stationary (Fig. 2). The average returns for the series is 2.34% in annualized terms, and the distribution seems to have fat tails.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Soybean_returns} alt="Soybeans Returns Time Series" style={{ width: '400px', height: 'auto', margin: '10px' }} />
                <img src={hist_sb_ret} alt="Histogram of Soybeans Returns" style={{ width: '400px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 2: Soybeans returns time series and histogram</p>

            <p>
                We then performed a LM test on the log-returns series, where we used 1-5 lags to assess the presence of the ARCH effect. The null hypothesis is that there is no ARCH effect up to lag Q. We rejected the null hypothesis (p-values &lt; 0.001), concluding that the residual sequence has conditional heteroscedasticity and an ARCH effect.
                To try to visualize it, we looked at the 12-mo rolling variance and its ACF and PACF (Fig. 3). The ACF tails-off and PACF cuts off, but seem to have some seasonal effect.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={SB_rolling_vol} alt="Rolling Volatility of Soybeans" style={{ width: '400px', height: 'auto', margin: '10px' }} />
                <img src={SB_rol_vol_ACF} alt="ACF/PACF of Soybeans Volatility" style={{ width: '400px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 3: Rolling volatility and ACF/PACF of volatility</p>

            <p>
                In general, a GARCH model was proposed by Bollerslev (1986) and can be written as:
            </p>
            <pre>
                y<sub>t</sub> = x<sub>t</sub> 'b + ε<sub>t</sub>, ε<sub>t</sub> ~ NN(0,h<sub>t</sub>), 
                h<sub>t</sub> = α<sub>0</sub> + Σ<sup>q</sup><sub>i=1</sub> α<sub>i</sub> ε<sup>2</sup><sub>t-i</sub> + Σ<sup>p</sup><sub>i=1</sub> β<sub>i</sub> h<sub>t-i</sub>.
            </pre>

            <p>
                We fitted multiple GARCH models to find the one of best fit, varying them in four ways:
                <ul>
                    <li>AR lag (0 or 1): the number of past values in the time series that the current value depends on.</li>
                    <li>MA lag (0 or 1): the number of lagged forecast errors in the prediction equation.</li>
                    <li>Type of GARCH model (standard GARCH, exponential GARCH, and Glosten-Jagannathan-Runkle GARCH).</li>
                    <li>Distribution type of errors (normal distribution or t-distribution).</li>
                </ul>
                To choose the best model, we relied on AIC and BIC information criteria, where the lowest one was selected.
            </p>
            <h2>Results</h2>

            <p>
                We analyzed the 24 models through the AIC and BIC methods to find the most suitable model. The scatter plot in (Fig. 4) shows each model and its AIC and BIC values. Based off these results we selected two models: 1,0,1,1 exponential GARCH with a student t-distribution, and 1,1,1,1 exponential GARCH with student t-distribution. Then we analyzed their overall output (coefficients, residuals, and goodness-of-fitness) and we chose the 1,0,1,1 exponential GARCH model with a student t-distribution.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Garch_AIC} alt="Scatterplot of AIC Results from GARCH Models" style={{ width: '330px', height: 'auto', margin: '10px' }} />
                <img src={Garch_BIC} alt="Scatterplot of BIC Results from GARCH Models" style={{ width: '330px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 4: Scatterplot of AIC and BIC Results from All GARCH Models Tested</p>

            <p>
                All parameters in the model (Fig. 5) show highly significant t-values, indicating robust statistical significance. The coefficients suggest a strong persistence in volatility (high beta1), significant leverage effects (non-zero gamma1), and notable impact of past shocks on current volatility (alpha1).
                The weighted Ljung-Box tests on standardized and squared residuals (Fig. 5) suggest no significant serial correlation or ARCH effects at conventional levels, supporting the model's adequacy in capturing the conditional mean and variance dynamics without leaving unmodeled patterns in residuals.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Garch_parameters} alt="Parameters and Weighted Ljung-Box Test" style={{ width: '350px', height: 'auto', margin: '10px' }} />
                <img src={Ljung_Box_Garch} alt="Weighted Ljung-Box Test" style={{ width: '400px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 5: Parameters and Weighted Ljung-Box Test</p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Garch_residuals} alt="ACF and PACF of Residuals" style={{ width: '500px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 6: ACF and PACF of Residuals</p>

            <p>
                The ACF and PACF plots of the residuals (Fig. 6) from the GARCH model indicate that most auto-correlations are within the confidence bounds, suggesting that there is no significant serial correlation in the residuals. There is, however, likely an outlier.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Garch_forecast} alt="Final Model Forecast" style={{ width: '750px', height: 'auto', margin: '10px' }} />
            </div>
            <p style={{ textAlign: 'center' }}>Figure 7: Final Model Forecasted</p>

            <p>
                (Fig. 7):
                <ol>
                    <li>Returns (top left): The forecast aligns well with the general trend of the actual series, though it occasionally underestimates extreme fluctuations.</li>
                    <li>Volatility (top right): The predicted volatility shows a declining trend, but fails to capture sporadic spikes in actual volatility.</li>
                    <li>Rolling Returns (bottom left): It captures a larger proportion of the actual series, suggesting a reasonable but still imperfect estimation of volatility.</li>
                    <li>Rolling Volatility (bottom right): The model smooths out volatility forecasts, showing less variability compared to actual data and possibly overlooking short-term volatility spikes.</li>
                </ol>
            </p>

            <h2>Discussion</h2>
            <p>
            The GARCH model effectively captures general trends and periodic fluctuations in Soybean return rates but occasionally fails to account for sudden spikes in volatility. It shows a decline in volatility in recent years, suggesting an expectation of stabilizing market conditions. The model also exhibits significant sensitivity to negative shocks, indicating that adverse events impact volatility more than positive events. The GARCH model underestimates extreme volatility events. Assumptions about error distribution and leverage effects may not fully capture the true market dynamics, potentially limiting the accuracy of forecasts. The model assumes static parameters, which may not adapt well to evolving conditions without frequent updates.
            </p>

            <h2>References</h2>
            <ul>
                <li>Bollerslev, T. (1986). Generalized autoregressive conditional heteroskedasticity. <i>Journal of Econometrics</i>, 31(3), 307-327.</li>
                <li>Ramírez, O. A., & Fadiga, M. (2003). Forecasting Agricultural Commodity Prices with Asymmetric-Error GARCH Models. <i>Journal of Agricultural and Resource Economics</i>, 28(1), 71-85.</li>
            </ul>

        </div>
    );
};

export default SoybeanGARCH;
