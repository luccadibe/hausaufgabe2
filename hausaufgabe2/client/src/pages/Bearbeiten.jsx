function Bearbeiten() {
    return (
        <>
            {" "}
            <main className="container mt-4">
                <h1>Neues Angaben</h1>
            </main>

            <div class="container mt-3">
                <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Name der Todo</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                        placeholder="Beispielseite mit dem Bootstrap Framework anlegen" />
                </div>
                <div class="input-group mt-3">
                    <span class="input-group-text">Deadline</span>
                    <input type="text" aria-label="Tag" class="form-control" placeholder="26" />
                    <input type="text" aria-label="Monat" class="form-control" placeholder="April" />
                    <input type="text" aria-label="Jahr" class="form-control" placeholder="2023" />
                </div>

                <div class="input-group mt-3">
                    <span class="input-group-text" id="basic-addon1">%</span>
                    <input type="text" class="form-control" placeholder="25" aria-label="Percent" aria-describedby="basic-addon1" />
                </div>

                <div class="d-grid gap-2 mt-3">
                    <button class="btn btn-primary" type="button">Speichern</button>
                </div>
                <div class="d-grid gap-2 mt-3">
                    <button class="btn btn-secondary" type="button">Abbrechen</button>
                </div>
            </div>


        </>
    );
}

export default Bearbeiten;
