import index from "./index.html";

Bun.serve({
  port: 3001,
  routes: {
    "/": index,
    "/api/intake": {
      POST: async (req) => {
        try {
          const data = await req.json();
          const { fullName, companyName, email, phone, insuranceType, monthlyVolume, targetStates, message } = data;

          // Validate required fields
          if (!fullName || !companyName || !email || !phone || !insuranceType || !monthlyVolume) {
            return new Response(JSON.stringify({ error: "Missing required fields" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          // Save submission to JSON file
          const submission = {
            ...data,
            submittedAt: new Date().toISOString(),
          };

          const filePath = "./submissions.json";
          const file = Bun.file(filePath);
          let submissions: any[] = [];
          if (await file.exists()) {
            submissions = await file.json();
          }
          submissions.push(submission);
          await Bun.write(filePath, JSON.stringify(submissions, null, 2));

          console.log(`New intake submission from ${fullName} (${companyName}) - ${email}`);

          return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("Intake submission error:", err);
          return new Response(JSON.stringify({ error: "Server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
  async fetch(req) {
    const url = new URL(req.url);
    const filePath = "." + url.pathname;
    const f = Bun.file(filePath);
    if (await f.exists()) {
      return new Response(f);
    }
    return new Response("Not Found", { status: 404 });
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log("Server running at http://localhost:3001");
