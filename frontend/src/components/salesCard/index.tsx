import NotificationButton from '../NotificationButton'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './styles.css'
import { useState } from 'react';
function salesCard() {

    const max = new Date()
    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max)

    return (
        <div className="card">
            <h2 className="sales-title">Vendas</h2>
            <div>
                <div>
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th className="show992">Id</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#01</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">11</td>
                            <td className="show992">04</td>
                            <td>R$ 300,00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#01</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">11</td>
                            <td className="show992">04</td>
                            <td>R$ 300,00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#01</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">11</td>
                            <td className="show992">04</td>
                            <td>R$ 300,00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#01</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">11</td>
                            <td className="show992">04</td>
                            <td>R$ 300,00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#01</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">11</td>
                            <td className="show992">04</td>
                            <td>R$ 300,00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default salesCard