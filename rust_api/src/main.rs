use axum::{extract::Query, http::StatusCode, routing::get, Json, Router};
use serde::Serialize;
use std::collections::HashMap;

#[derive(Serialize)]
struct Msg {
    message: String,
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/", get(handler));

    println!("Rust REST service started...");
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn handler(Query(params): Query<HashMap<String, String>>) -> (StatusCode, Json<Msg>) {
    let name = match params.get("name") {
        Some(value) => value,
        None => "World",
    };
    let msg = Msg {
        message: format!("Hello {}!", name.trim()),
    };

    (StatusCode::OK, Json(msg))
}
